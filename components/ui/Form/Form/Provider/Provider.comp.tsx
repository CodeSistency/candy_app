import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormProviderCompType } from "./Provider.types";

export const FormProviderComp = ({
  children,
  schema,
  debug,
  persist,
}: FormProviderCompType) => {
  const methods = useForm({
    resolver: zodResolver(
      schema ?? z.boolean().optional().default(false) // Default schema if none provided
    ),
  });

  useEffect(() => {
    if (persist) {
      const persistForm = async () => {
        const subscription = methods.watch(async (value) => {
          await AsyncStorage.setItem(persist, JSON.stringify(value));
        });
        const savedData = await AsyncStorage.getItem(persist);
        if (savedData) {
          methods.reset(JSON.parse(savedData));
        }
        return () => subscription.unsubscribe();
      };
      persistForm();
    } else {
      AsyncStorage.removeItem(persist || "storageKey");
    }
  }, [persist, methods.watch, methods.reset]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

FormProviderComp.storage = ({
  children,
  schema,
  debug,
  key,
  config,
}: {
  children: React.ReactNode;
  schema?: z.Schema;
  debug?: boolean;
  key: string;
  config?: any; // Adjust based on your needs
}) => {
  const methods = useForm({
    resolver: zodResolver(
      schema ?? z.boolean().optional().default(false)
    ),
  });

  useEffect(() => {
    const persistForm = async () => {
      const subscription = methods.watch(async (value) => {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      });
      const savedData = await AsyncStorage.getItem(key);
      if (savedData) {
        methods.reset(JSON.parse(savedData));
      }
      return () => subscription.unsubscribe();
    };
    persistForm();
  }, [methods.watch, methods.reset, key]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};