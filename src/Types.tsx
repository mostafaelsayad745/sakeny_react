import { Express } from "express";


export type AuthenticationRequestBody = {
    userName?: string | undefined;
    userMail?: string | undefined;
    password?: string | undefined;
}

export type FeatureForCreationDto = {
    featuresName?: string | undefined;
}

export type FeatureForUpdateDto = {
    featuresName?: string | undefined;
}

export type MessageForCreationDto = {
    message?: string | undefined;
}

export type NotificationForCreationDto = {
    message?: string | undefined;
}

export type NotificationForUpdateDto = {
    message?: string | undefined;
}

export type NotificationTbl = {
    notificationId: number;
    userId?: number;
    user?: UsersTbl;
    message?: string | undefined;
    timestamp?: Date;
}





export type PostFaviourateTbl = {
    postFavId?: number;
    postId?: number;
    post?: PostsTbl;
    userId?: number;
    user?: UsersTbl;
}

export type PostFeedbackForCreationDto = {
    postFeedText?: string | undefined;
}

export type PostFeedbackForUpdateDto = {
    postFeedDate?: Date | undefined;
    postFeedTime?: TimeSpan;
    postFeedText?: string | undefined;
    userId?: number | undefined;
}

export type PostFeedbackTbl = {
    postFeedId?: number;
    postFeedDate?: Date | undefined;
    postFeedTime?: TimeSpan;
    postFeedText?: string | undefined;
    postId?: number | undefined;
    userId?: number | undefined;
    post?: PostsTbl;
    user?: UsersTbl;
}

export type PostForCreationDto = {
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

export type PostForUpdateDto = {
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

export type PostPicTbl = {
    postPicId?: number;
    postId?: number | undefined;
    picture?: string | undefined;
    post?: PostsTbl;
}

export type PostsTbl = {
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

export type TimeSpan = {
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

export type UserFeedbackDto = {
    feedbackText?: string | undefined;
}

export type UserForCreationDto = {
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

export type UserForReturnDto = {
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

export type UserForUpdateDto = {
    userId: number;
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
export type PostForSerchDto =  {
    PostTitle?: string;
    PostAddress?: string;
    MinPrice?: number;
    MaxPrice?: number;
    MinArea?: number;
    MaxArea?: number;
    MinRooms?: number;
    MaxRooms?: number;
    MinBathrooms?: number;
    MaxBathrooms?: number;
    MinFloors?: number;
    MaxFloors?: number;
    PostLookSea?: boolean;
    PostPetsAllow?: boolean;
}
export type PostFeedbackForReturnDto = {
    postFeedId: number;
    postFeedDate?: string;
    postFeedTime?: TimeSpan;
    postFeedText?: string;
    userId?: number;
}
export type PostForReturnDto = {
    postId: number;
    postDate?: string;
    postTime?: string;
    postCategory?: string;
    postTitle?: string;
    postBody?: string;
    postArea?: number;
    postKitchens?: number;
    postBedrooms?: number;
    postBathrooms?: number;
    postLookSea?: boolean;
    postPetsAllow?: boolean;
    postCurrency?: string;
    postPriceAi?: number;
    postPriceDisplay?: number;
    postPriceType?: string;
    postAddress?: string;
    postCity?: string;
    postState?: string;
    postFloor?: number;
    postLatitude?: string;
    postLongitude?: string;
    postStatue?: boolean;
    postUserId: number;
   
}

export type UsersTbl = {
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

export type FileParameter = {
    data: any;
    fileName: string;
}