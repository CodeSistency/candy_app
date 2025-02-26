
import { ActivitiesModelType } from "./Activities";
import { CourseModelType } from "./Courses";
import { PostModelType } from "./Posts";
import { UsersModelType } from "./Users";

export interface ApiResponse<T> {
	code: number;
	message: string;
	data: T | null;
  }
export interface EntityModelPostType {
	Posts: PostModelType[];
}


export interface EntityModelUserType {
	Users: UsersModelType[];
}

export interface EntityModelActivityType {
	Activities: ActivitiesModelType[];
}

export interface EntityModelCoursesType {
	Courses: CourseModelType[];
}



export type EntityModelType = EntityModelPostType & EntityModelActivityType & EntityModelUserType & EntityModelCoursesType;

export type KeyEntityModelType = keyof EntityModelType;

export type ExtendsKeyEntityModelType<T extends KeyEntityModelType> =
	// Administration
	T extends "Posts"
		? PostModelType
		:
		T extends "Activities"
		? ActivitiesModelType
		:
		T extends "Courses"
		? CourseModelType
		:
		T extends "Users"
		? UsersModelType
		: never;		



		// : T extends "AdministrationBankAccount"
		// 	? AdministrationBankAccountModelType
		// 	: T extends "AdministrationSupplierCategories"
		// 		? AdministrationSupplierCategoriesModelType
		// 		: T extends "AdministrationSupplierType"
		// 			? AdministrationSupplierTypeModelType
		// 			: never;		
					

export interface ModelType<
	KeyT extends KeyEntityModelType,
	EndpointT,
	SchemaT,
> {
	key: KeyT;
	endpoint: EndpointT;
	schema: SchemaT;
}
