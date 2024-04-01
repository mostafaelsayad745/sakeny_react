//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.3.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export interface FeatureForCreationDto {
    featuresName?: string | undefined;
}

export interface FeatureForUpdateDto {
    featuresName?: string | undefined;
}

export interface MessageForCreationDto {
    message?: string | undefined;
}

export interface NotificationForCreationDto {
    message?: string | undefined;
}

export interface NotificationForUpdateDto {
    message?: string | undefined;
}

export interface NotificationTbl {
    notificationId: number;
    userId?: number;
    user?: UsersTbl;
    message?: string | undefined;
    timestamp?: Date;
}

export interface Operation {
    operationType?: OperationType;
    path?: string | undefined;
    op?: string | undefined;
    from?: string | undefined;
    value?: any | undefined;
}

export enum OperationType {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
}

export interface PostFaviourateTbl {
    postFavId?: number;
    postId?: number;
    post?: PostsTbl;
    userId?: number;
    user?: UsersTbl;
}

export interface PostFeedbackForCreationDto {
    postFeedDate?: Date | undefined;
    postFeedTime?: TimeSpan;
    postFeedText?: string | undefined;
}

export interface PostFeedbackForUpdateDto {
    postFeedDate?: Date | undefined;
    postFeedTime?: TimeSpan;
    postFeedText?: string | undefined;
    userId?: number | undefined;
}

export interface PostFeedbackTbl {
    postFeedId?: number;
    postFeedDate?: Date | undefined;
    postFeedTime?: TimeSpan;
    postFeedText?: string | undefined;
    postId?: number | undefined;
    userId?: number | undefined;
    post?: PostsTbl;
    user?: UsersTbl;
}

export interface PostForCreationDto {
    postDate?: Date | undefined;
    postTime?: TimeSpan;
    postCategory?: string | undefined;
    postTitle?: string | undefined;
    postBody?: string | undefined;
    postArea?: number | undefined;
    postKitchens?: number | undefined;
    postBedrooms?: number | undefined;
    postBathrooms?: number | undefined;
    postLookSea?: boolean | undefined;
    postPetsAllow?: boolean | undefined;
    postCurrency?: string | undefined;
    postPriceAi?: number | undefined;
    postPriceDisplay?: number | undefined;
    postPriceType?: string | undefined;
    postAddress?: string | undefined;
    postCity?: string | undefined;
    postState?: string | undefined;
    postFloor?: number | undefined;
    postLatitude?: string | undefined;
    postLongitude?: string | undefined;
    postStatue?: boolean | undefined;
    postUserId?: number;
    postPicTbls?: PostPicTbl[] | undefined;
}

export interface PostForUpdateDto {
    postDate?: Date | undefined;
    postTime?: TimeSpan;
    postCategory?: string | undefined;
    postTitle?: string | undefined;
    postBody?: string | undefined;
    postArea?: number | undefined;
    postKitchens?: number | undefined;
    postBedrooms?: number | undefined;
    postBathrooms?: number | undefined;
    postLookSea?: boolean | undefined;
    postPetsAllow?: boolean | undefined;
    postCurrency?: string | undefined;
    postPriceAi?: number | undefined;
    postPriceDisplay?: number | undefined;
    postPriceType?: string | undefined;
    postAddress?: string | undefined;
    postCity?: string | undefined;
    postState?: string | undefined;
    postFloor?: number | undefined;
    postLatitude?: string | undefined;
    postLongitude?: string | undefined;
    postStatue?: boolean | undefined;
    postPicTbls?: PostPicTbl[] | undefined;
}

export interface PostPicTbl {
    postPicId?: number;
    postId?: number | undefined;
    picture?: string | undefined;
    post?: PostsTbl;
}

export interface PostsTbl {
    postId?: number;
    postDate?: Date | undefined;
    postTime?: TimeSpan;
    postCategory?: string | undefined;
    postTitle?: string | undefined;
    postBody?: string | undefined;
    postArea?: number | undefined;
    postKitchens?: number | undefined;
    postBedrooms?: number | undefined;
    postBathrooms?: number | undefined;
    postLookSea?: boolean | undefined;
    postPetsAllow?: boolean | undefined;
    postCurrency?: string | undefined;
    postPriceAi?: number | undefined;
    postPriceDisplay?: number | undefined;
    postPriceType?: string | undefined;
    postAddress?: string | undefined;
    postCity?: string | undefined;
    postState?: string | undefined;
    postFloor?: number | undefined;
    postLatitude?: string | undefined;
    postLongitude?: string | undefined;
    postStatue?: boolean | undefined;
    postFeedbackTbls?: PostFeedbackTbl[] | undefined;
    postPicTbls?: PostPicTbl[] | undefined;
    postUserId?: number;
    user?: UsersTbl;
}

export interface TimeSpan {
    ticks?: number;
    readonly days?: number;
    readonly hours?: number;
    readonly milliseconds?: number;
    readonly minutes?: number;
    readonly seconds?: number;
    readonly totalDays?: number;
    readonly totalHours?: number;
    readonly totalMilliseconds?: number;
    readonly totalMinutes?: number;
    readonly totalSeconds?: number;
}

export interface UserFeedbackDto {
    feedbackText?: string | undefined;
}

export interface UserForCreationDto {
    userName: string;
    userPassword: string;
    userFullName: string;
    userEmail: string;
    userNatId: string;
    userGender: string;
    userAge: number;
    userInfo: string;
    userAddress: string;
    userAccountType: string;
}

export interface UserForReturnDto {
    map(arg0: (u: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    userId?: number;
    userName?: string | undefined;
    userPassword?: string | undefined;
    userFullName?: string | undefined;
    userEmail?: string | undefined;
    userNatId?: string | undefined;
    userGender?: string | undefined;
    userAge?: number;
    userInfo?: string | undefined;
    userAddress?: string | undefined;
    userAccountType?: string | undefined;
}

export interface UserForUpdateDto {
    userName: string;
    userPassword: string;
    userFullName: string;
    userEmail: string;
    userNatId: string;
    userGender: string;
    userAge: number;
    userInfo: string;
    userAddress: string;
    userAccountType: string;
}

export interface UsersTbl {
    userId: number;
    userName?: string | undefined;
    userPassword?: string | undefined;
    userFullName?: string | undefined;
    userEmail?: string | undefined;
    userNatId?: string | undefined;
    userGender?: string | undefined;
    userAge?: number;
    userInfo?: string | undefined;
    userAddress?: string | undefined;
    userAccountType?: string | undefined;
    postFeedbackTbls?: PostFeedbackTbl[] | undefined;
    notifications?: NotificationTbl[] | undefined;
    posts?: PostsTbl[] | undefined;
    favoritePosts?: PostFaviourateTbl[] | undefined;
}

export interface FileParameter {
    data: any;
    fileName: string;
}