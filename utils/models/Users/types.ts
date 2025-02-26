import { z } from "zod";
import { schema } from "./schema";
import { ActivitiesSent, QuizzSent } from "../Activities";
import { PostModelType } from "../Posts";
import { CourseEnrollment, CourseModelType } from "../Courses";

export type LoginSchemaType = z.infer<
	typeof schema.login
>;
export type RegisterSchemaType = z.infer<
	typeof schema.register
>;

export type CreateUserSchema = z.infer<typeof schema.createUserSchema>;

export type UpdateUserSchema = z.infer<typeof schema.updateUserSchema>;


  export interface UsersModelType {
	id: number;
	email: string;
	password: string;
	create_date: Date;
	user_name: string;
	gender: Gender;
	genderId: number;
	name: string;
	firebaseToken: string;
	last_name: string;
	phone: string;
	courses: CourseEnrollment[];
	course_owner: CourseModelType[];
	activities_sent: ActivitiesSent[];
	QuizzSent: QuizzSent[];
	Post: PostModelType[];
	Role: Role;
	roleId: number;
  }

  export interface Role {
	id: number;
	role: string;
	users: UsersModelType[];
  }
  
  export interface Gender {
	id: number;
	gender: string;
	users: UsersModelType[];
  }