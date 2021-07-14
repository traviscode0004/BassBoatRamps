type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type LakeImageRelateToManyInput = {
  readonly create?: ReadonlyArray<LakeImageCreateInput | null> | null;
  readonly connect?: ReadonlyArray<LakeImageWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<LakeImageWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LakeWhereInput = {
  readonly AND?: ReadonlyArray<LakeWhereInput | null> | null;
  readonly OR?: ReadonlyArray<LakeWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address?: Scalars['String'] | null;
  readonly address_not?: Scalars['String'] | null;
  readonly address_contains?: Scalars['String'] | null;
  readonly address_not_contains?: Scalars['String'] | null;
  readonly address_starts_with?: Scalars['String'] | null;
  readonly address_not_starts_with?: Scalars['String'] | null;
  readonly address_ends_with?: Scalars['String'] | null;
  readonly address_not_ends_with?: Scalars['String'] | null;
  readonly address_i?: Scalars['String'] | null;
  readonly address_not_i?: Scalars['String'] | null;
  readonly address_contains_i?: Scalars['String'] | null;
  readonly address_not_contains_i?: Scalars['String'] | null;
  readonly address_starts_with_i?: Scalars['String'] | null;
  readonly address_not_starts_with_i?: Scalars['String'] | null;
  readonly address_ends_with_i?: Scalars['String'] | null;
  readonly address_not_ends_with_i?: Scalars['String'] | null;
  readonly address_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address2?: Scalars['String'] | null;
  readonly address2_not?: Scalars['String'] | null;
  readonly address2_contains?: Scalars['String'] | null;
  readonly address2_not_contains?: Scalars['String'] | null;
  readonly address2_starts_with?: Scalars['String'] | null;
  readonly address2_not_starts_with?: Scalars['String'] | null;
  readonly address2_ends_with?: Scalars['String'] | null;
  readonly address2_not_ends_with?: Scalars['String'] | null;
  readonly address2_i?: Scalars['String'] | null;
  readonly address2_not_i?: Scalars['String'] | null;
  readonly address2_contains_i?: Scalars['String'] | null;
  readonly address2_not_contains_i?: Scalars['String'] | null;
  readonly address2_starts_with_i?: Scalars['String'] | null;
  readonly address2_not_starts_with_i?: Scalars['String'] | null;
  readonly address2_ends_with_i?: Scalars['String'] | null;
  readonly address2_not_ends_with_i?: Scalars['String'] | null;
  readonly address2_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address2_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state?: Scalars['String'] | null;
  readonly state_not?: Scalars['String'] | null;
  readonly state_contains?: Scalars['String'] | null;
  readonly state_not_contains?: Scalars['String'] | null;
  readonly state_starts_with?: Scalars['String'] | null;
  readonly state_not_starts_with?: Scalars['String'] | null;
  readonly state_ends_with?: Scalars['String'] | null;
  readonly state_not_ends_with?: Scalars['String'] | null;
  readonly state_i?: Scalars['String'] | null;
  readonly state_not_i?: Scalars['String'] | null;
  readonly state_contains_i?: Scalars['String'] | null;
  readonly state_not_contains_i?: Scalars['String'] | null;
  readonly state_starts_with_i?: Scalars['String'] | null;
  readonly state_not_starts_with_i?: Scalars['String'] | null;
  readonly state_ends_with_i?: Scalars['String'] | null;
  readonly state_not_ends_with_i?: Scalars['String'] | null;
  readonly state_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zip?: Scalars['String'] | null;
  readonly zip_not?: Scalars['String'] | null;
  readonly zip_contains?: Scalars['String'] | null;
  readonly zip_not_contains?: Scalars['String'] | null;
  readonly zip_starts_with?: Scalars['String'] | null;
  readonly zip_not_starts_with?: Scalars['String'] | null;
  readonly zip_ends_with?: Scalars['String'] | null;
  readonly zip_not_ends_with?: Scalars['String'] | null;
  readonly zip_i?: Scalars['String'] | null;
  readonly zip_not_i?: Scalars['String'] | null;
  readonly zip_contains_i?: Scalars['String'] | null;
  readonly zip_not_contains_i?: Scalars['String'] | null;
  readonly zip_starts_with_i?: Scalars['String'] | null;
  readonly zip_not_starts_with_i?: Scalars['String'] | null;
  readonly zip_ends_with_i?: Scalars['String'] | null;
  readonly zip_not_ends_with_i?: Scalars['String'] | null;
  readonly zip_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zip_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo_every?: LakeImageWhereInput | null;
  readonly photo_some?: LakeImageWhereInput | null;
  readonly photo_none?: LakeImageWhereInput | null;
  readonly largemouth?: Scalars['Boolean'] | null;
  readonly largemouth_not?: Scalars['Boolean'] | null;
  readonly smallmouth?: Scalars['Boolean'] | null;
  readonly smallmouth_not?: Scalars['Boolean'] | null;
  readonly spotted?: Scalars['Boolean'] | null;
  readonly spotted_not?: Scalars['Boolean'] | null;
};

export type LakeWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortLakesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'address2_ASC'
  | 'address2_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'state_ASC'
  | 'state_DESC'
  | 'zip_ASC'
  | 'zip_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'largemouth_ASC'
  | 'largemouth_DESC'
  | 'smallmouth_ASC'
  | 'smallmouth_DESC'
  | 'spotted_ASC'
  | 'spotted_DESC';

export type LakeUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly address2?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zip?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: LakeImageRelateToManyInput | null;
  readonly largemouth?: Scalars['Boolean'] | null;
  readonly smallmouth?: Scalars['Boolean'] | null;
  readonly spotted?: Scalars['Boolean'] | null;
};

export type LakesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: LakeUpdateInput | null;
};

export type LakeCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly address2?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zip?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: LakeImageRelateToManyInput | null;
  readonly largemouth?: Scalars['Boolean'] | null;
  readonly smallmouth?: Scalars['Boolean'] | null;
  readonly spotted?: Scalars['Boolean'] | null;
};

export type LakesCreateInput = {
  readonly data?: LakeCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type LakeRelateToOneInput = {
  readonly create?: LakeCreateInput | null;
  readonly connect?: LakeWhereUniqueInput | null;
  readonly disconnect?: LakeWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LakeImageWhereInput = {
  readonly AND?: ReadonlyArray<LakeImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<LakeImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lake?: LakeWhereInput | null;
  readonly lake_is_null?: Scalars['Boolean'] | null;
};

export type LakeImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortLakeImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'lake_ASC'
  | 'lake_DESC';

export type LakeImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly lake?: LakeRelateToOneInput | null;
};

export type LakeImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: LakeImageUpdateInput | null;
};

export type LakeImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly lake?: LakeRelateToOneInput | null;
};

export type LakeImagesCreateInput = {
  readonly data?: LakeImageCreateInput | null;
};

export type RampImageRelateToManyInput = {
  readonly create?: ReadonlyArray<RampImageCreateInput | null> | null;
  readonly connect?: ReadonlyArray<RampImageWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<RampImageWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RampWhereInput = {
  readonly AND?: ReadonlyArray<RampWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RampWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly lake?: LakeWhereInput | null;
  readonly lake_is_null?: Scalars['Boolean'] | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address?: Scalars['String'] | null;
  readonly address_not?: Scalars['String'] | null;
  readonly address_contains?: Scalars['String'] | null;
  readonly address_not_contains?: Scalars['String'] | null;
  readonly address_starts_with?: Scalars['String'] | null;
  readonly address_not_starts_with?: Scalars['String'] | null;
  readonly address_ends_with?: Scalars['String'] | null;
  readonly address_not_ends_with?: Scalars['String'] | null;
  readonly address_i?: Scalars['String'] | null;
  readonly address_not_i?: Scalars['String'] | null;
  readonly address_contains_i?: Scalars['String'] | null;
  readonly address_not_contains_i?: Scalars['String'] | null;
  readonly address_starts_with_i?: Scalars['String'] | null;
  readonly address_not_starts_with_i?: Scalars['String'] | null;
  readonly address_ends_with_i?: Scalars['String'] | null;
  readonly address_not_ends_with_i?: Scalars['String'] | null;
  readonly address_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address2?: Scalars['String'] | null;
  readonly address2_not?: Scalars['String'] | null;
  readonly address2_contains?: Scalars['String'] | null;
  readonly address2_not_contains?: Scalars['String'] | null;
  readonly address2_starts_with?: Scalars['String'] | null;
  readonly address2_not_starts_with?: Scalars['String'] | null;
  readonly address2_ends_with?: Scalars['String'] | null;
  readonly address2_not_ends_with?: Scalars['String'] | null;
  readonly address2_i?: Scalars['String'] | null;
  readonly address2_not_i?: Scalars['String'] | null;
  readonly address2_contains_i?: Scalars['String'] | null;
  readonly address2_not_contains_i?: Scalars['String'] | null;
  readonly address2_starts_with_i?: Scalars['String'] | null;
  readonly address2_not_starts_with_i?: Scalars['String'] | null;
  readonly address2_ends_with_i?: Scalars['String'] | null;
  readonly address2_not_ends_with_i?: Scalars['String'] | null;
  readonly address2_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address2_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state?: Scalars['String'] | null;
  readonly state_not?: Scalars['String'] | null;
  readonly state_contains?: Scalars['String'] | null;
  readonly state_not_contains?: Scalars['String'] | null;
  readonly state_starts_with?: Scalars['String'] | null;
  readonly state_not_starts_with?: Scalars['String'] | null;
  readonly state_ends_with?: Scalars['String'] | null;
  readonly state_not_ends_with?: Scalars['String'] | null;
  readonly state_i?: Scalars['String'] | null;
  readonly state_not_i?: Scalars['String'] | null;
  readonly state_contains_i?: Scalars['String'] | null;
  readonly state_not_contains_i?: Scalars['String'] | null;
  readonly state_starts_with_i?: Scalars['String'] | null;
  readonly state_not_starts_with_i?: Scalars['String'] | null;
  readonly state_ends_with_i?: Scalars['String'] | null;
  readonly state_not_ends_with_i?: Scalars['String'] | null;
  readonly state_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zip?: Scalars['String'] | null;
  readonly zip_not?: Scalars['String'] | null;
  readonly zip_contains?: Scalars['String'] | null;
  readonly zip_not_contains?: Scalars['String'] | null;
  readonly zip_starts_with?: Scalars['String'] | null;
  readonly zip_not_starts_with?: Scalars['String'] | null;
  readonly zip_ends_with?: Scalars['String'] | null;
  readonly zip_not_ends_with?: Scalars['String'] | null;
  readonly zip_i?: Scalars['String'] | null;
  readonly zip_not_i?: Scalars['String'] | null;
  readonly zip_contains_i?: Scalars['String'] | null;
  readonly zip_not_contains_i?: Scalars['String'] | null;
  readonly zip_starts_with_i?: Scalars['String'] | null;
  readonly zip_not_starts_with_i?: Scalars['String'] | null;
  readonly zip_ends_with_i?: Scalars['String'] | null;
  readonly zip_not_ends_with_i?: Scalars['String'] | null;
  readonly zip_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly zip_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly costToLaunch?: Scalars['String'] | null;
  readonly costToLaunch_not?: Scalars['String'] | null;
  readonly costToLaunch_contains?: Scalars['String'] | null;
  readonly costToLaunch_not_contains?: Scalars['String'] | null;
  readonly costToLaunch_starts_with?: Scalars['String'] | null;
  readonly costToLaunch_not_starts_with?: Scalars['String'] | null;
  readonly costToLaunch_ends_with?: Scalars['String'] | null;
  readonly costToLaunch_not_ends_with?: Scalars['String'] | null;
  readonly costToLaunch_i?: Scalars['String'] | null;
  readonly costToLaunch_not_i?: Scalars['String'] | null;
  readonly costToLaunch_contains_i?: Scalars['String'] | null;
  readonly costToLaunch_not_contains_i?: Scalars['String'] | null;
  readonly costToLaunch_starts_with_i?: Scalars['String'] | null;
  readonly costToLaunch_not_starts_with_i?: Scalars['String'] | null;
  readonly costToLaunch_ends_with_i?: Scalars['String'] | null;
  readonly costToLaunch_not_ends_with_i?: Scalars['String'] | null;
  readonly costToLaunch_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly costToLaunch_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly bathrooms?: Scalars['String'] | null;
  readonly bathrooms_not?: Scalars['String'] | null;
  readonly bathrooms_contains?: Scalars['String'] | null;
  readonly bathrooms_not_contains?: Scalars['String'] | null;
  readonly bathrooms_starts_with?: Scalars['String'] | null;
  readonly bathrooms_not_starts_with?: Scalars['String'] | null;
  readonly bathrooms_ends_with?: Scalars['String'] | null;
  readonly bathrooms_not_ends_with?: Scalars['String'] | null;
  readonly bathrooms_i?: Scalars['String'] | null;
  readonly bathrooms_not_i?: Scalars['String'] | null;
  readonly bathrooms_contains_i?: Scalars['String'] | null;
  readonly bathrooms_not_contains_i?: Scalars['String'] | null;
  readonly bathrooms_starts_with_i?: Scalars['String'] | null;
  readonly bathrooms_not_starts_with_i?: Scalars['String'] | null;
  readonly bathrooms_ends_with_i?: Scalars['String'] | null;
  readonly bathrooms_not_ends_with_i?: Scalars['String'] | null;
  readonly bathrooms_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly bathrooms_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly numberOfRamps?: Scalars['Int'] | null;
  readonly numberOfRamps_not?: Scalars['Int'] | null;
  readonly numberOfRamps_lt?: Scalars['Int'] | null;
  readonly numberOfRamps_lte?: Scalars['Int'] | null;
  readonly numberOfRamps_gt?: Scalars['Int'] | null;
  readonly numberOfRamps_gte?: Scalars['Int'] | null;
  readonly numberOfRamps_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly numberOfRamps_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly trailerParkingSpots?: Scalars['String'] | null;
  readonly trailerParkingSpots_not?: Scalars['String'] | null;
  readonly trailerParkingSpots_contains?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_contains?: Scalars['String'] | null;
  readonly trailerParkingSpots_starts_with?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_starts_with?: Scalars['String'] | null;
  readonly trailerParkingSpots_ends_with?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_ends_with?: Scalars['String'] | null;
  readonly trailerParkingSpots_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_contains_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_contains_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_starts_with_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_starts_with_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_ends_with_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_not_ends_with_i?: Scalars['String'] | null;
  readonly trailerParkingSpots_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly trailerParkingSpots_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly areTournamentsPremitted?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not?: Scalars['String'] | null;
  readonly areTournamentsPremitted_contains?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_contains?: Scalars['String'] | null;
  readonly areTournamentsPremitted_starts_with?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_starts_with?: Scalars['String'] | null;
  readonly areTournamentsPremitted_ends_with?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_ends_with?: Scalars['String'] | null;
  readonly areTournamentsPremitted_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_contains_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_contains_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_starts_with_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_starts_with_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_ends_with_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_not_ends_with_i?: Scalars['String'] | null;
  readonly areTournamentsPremitted_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly areTournamentsPremitted_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly isFourWheelDriveNeeded?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_contains?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_contains?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_starts_with?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_starts_with?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_ends_with?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_ends_with?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_contains_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_contains_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_starts_with_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_starts_with_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_ends_with_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_not_ends_with_i?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly isFourWheelDriveNeeded_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly extraRampDetails?: Scalars['String'] | null;
  readonly extraRampDetails_not?: Scalars['String'] | null;
  readonly extraRampDetails_contains?: Scalars['String'] | null;
  readonly extraRampDetails_not_contains?: Scalars['String'] | null;
  readonly extraRampDetails_starts_with?: Scalars['String'] | null;
  readonly extraRampDetails_not_starts_with?: Scalars['String'] | null;
  readonly extraRampDetails_ends_with?: Scalars['String'] | null;
  readonly extraRampDetails_not_ends_with?: Scalars['String'] | null;
  readonly extraRampDetails_i?: Scalars['String'] | null;
  readonly extraRampDetails_not_i?: Scalars['String'] | null;
  readonly extraRampDetails_contains_i?: Scalars['String'] | null;
  readonly extraRampDetails_not_contains_i?: Scalars['String'] | null;
  readonly extraRampDetails_starts_with_i?: Scalars['String'] | null;
  readonly extraRampDetails_not_starts_with_i?: Scalars['String'] | null;
  readonly extraRampDetails_ends_with_i?: Scalars['String'] | null;
  readonly extraRampDetails_not_ends_with_i?: Scalars['String'] | null;
  readonly extraRampDetails_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly extraRampDetails_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly photo_every?: RampImageWhereInput | null;
  readonly photo_some?: RampImageWhereInput | null;
  readonly photo_none?: RampImageWhereInput | null;
};

export type RampWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRampsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'lake_ASC'
  | 'lake_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'address2_ASC'
  | 'address2_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'state_ASC'
  | 'state_DESC'
  | 'zip_ASC'
  | 'zip_DESC'
  | 'costToLaunch_ASC'
  | 'costToLaunch_DESC'
  | 'bathrooms_ASC'
  | 'bathrooms_DESC'
  | 'numberOfRamps_ASC'
  | 'numberOfRamps_DESC'
  | 'trailerParkingSpots_ASC'
  | 'trailerParkingSpots_DESC'
  | 'areTournamentsPremitted_ASC'
  | 'areTournamentsPremitted_DESC'
  | 'isFourWheelDriveNeeded_ASC'
  | 'isFourWheelDriveNeeded_DESC'
  | 'extraRampDetails_ASC'
  | 'extraRampDetails_DESC'
  | 'photo_ASC'
  | 'photo_DESC';

export type RampUpdateInput = {
  readonly lake?: LakeRelateToOneInput | null;
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly address2?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zip?: Scalars['String'] | null;
  readonly costToLaunch?: Scalars['String'] | null;
  readonly bathrooms?: Scalars['String'] | null;
  readonly numberOfRamps?: Scalars['Int'] | null;
  readonly trailerParkingSpots?: Scalars['String'] | null;
  readonly areTournamentsPremitted?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded?: Scalars['String'] | null;
  readonly extraRampDetails?: Scalars['String'] | null;
  readonly photo?: RampImageRelateToManyInput | null;
};

export type RampsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RampUpdateInput | null;
};

export type RampCreateInput = {
  readonly lake?: LakeRelateToOneInput | null;
  readonly name?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly address2?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly zip?: Scalars['String'] | null;
  readonly costToLaunch?: Scalars['String'] | null;
  readonly bathrooms?: Scalars['String'] | null;
  readonly numberOfRamps?: Scalars['Int'] | null;
  readonly trailerParkingSpots?: Scalars['String'] | null;
  readonly areTournamentsPremitted?: Scalars['String'] | null;
  readonly isFourWheelDriveNeeded?: Scalars['String'] | null;
  readonly extraRampDetails?: Scalars['String'] | null;
  readonly photo?: RampImageRelateToManyInput | null;
};

export type RampsCreateInput = {
  readonly data?: RampCreateInput | null;
};

export type RampRelateToOneInput = {
  readonly create?: RampCreateInput | null;
  readonly connect?: RampWhereUniqueInput | null;
  readonly disconnect?: RampWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RampImageWhereInput = {
  readonly AND?: ReadonlyArray<RampImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RampImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly ramp?: RampWhereInput | null;
  readonly ramp_is_null?: Scalars['Boolean'] | null;
};

export type RampImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRampImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'ramp_ASC'
  | 'ramp_DESC';

export type RampImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly ramp?: RampRelateToOneInput | null;
};

export type RampImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RampImageUpdateInput | null;
};

export type RampImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly ramp?: RampRelateToOneInput | null;
};

export type RampImagesCreateInput = {
  readonly data?: RampImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type LakeListTypeInfo = {
  key: 'Lake';
  fields:
    | 'id'
    | 'name'
    | 'address'
    | 'address2'
    | 'city'
    | 'state'
    | 'zip'
    | 'description'
    | 'photo'
    | 'largemouth'
    | 'smallmouth'
    | 'spotted';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly address?: string | null;
    readonly address2?: string | null;
    readonly city?: string | null;
    readonly state?: string | null;
    readonly zip?: string | null;
    readonly description?: string | null;
    readonly photo?: string | null;
    readonly largemouth?: boolean | null;
    readonly smallmouth?: boolean | null;
    readonly spotted?: boolean | null;
  };
  inputs: {
    where: LakeWhereInput;
    create: LakeCreateInput;
    update: LakeUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: LakeWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortLakesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type LakeListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    LakeListTypeInfo,
    LakeListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  LakeListTypeInfo,
  LakeListTypeInfo['fields']
>;

export type LakeImageListTypeInfo = {
  key: 'LakeImage';
  fields: 'id' | 'image' | 'altText' | 'lake';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly lake?: string | null;
  };
  inputs: {
    where: LakeImageWhereInput;
    create: LakeImageCreateInput;
    update: LakeImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: LakeImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortLakeImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type LakeImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    LakeImageListTypeInfo,
    LakeImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  LakeImageListTypeInfo,
  LakeImageListTypeInfo['fields']
>;

export type RampListTypeInfo = {
  key: 'Ramp';
  fields:
    | 'id'
    | 'lake'
    | 'name'
    | 'address'
    | 'address2'
    | 'city'
    | 'state'
    | 'zip'
    | 'costToLaunch'
    | 'bathrooms'
    | 'numberOfRamps'
    | 'trailerParkingSpots'
    | 'areTournamentsPremitted'
    | 'isFourWheelDriveNeeded'
    | 'extraRampDetails'
    | 'photo';
  backing: {
    readonly id: string;
    readonly lake?: string | null;
    readonly name?: string | null;
    readonly address?: string | null;
    readonly address2?: string | null;
    readonly city?: string | null;
    readonly state?: string | null;
    readonly zip?: string | null;
    readonly costToLaunch?: string | null;
    readonly bathrooms?: string | null;
    readonly numberOfRamps?: number | null;
    readonly trailerParkingSpots?: string | null;
    readonly areTournamentsPremitted?: string | null;
    readonly isFourWheelDriveNeeded?: string | null;
    readonly extraRampDetails?: string | null;
    readonly photo?: string | null;
  };
  inputs: {
    where: RampWhereInput;
    create: RampCreateInput;
    update: RampUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RampWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRampsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RampListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RampListTypeInfo,
    RampListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RampListTypeInfo,
  RampListTypeInfo['fields']
>;

export type RampImageListTypeInfo = {
  key: 'RampImage';
  fields: 'id' | 'image' | 'altText' | 'ramp';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly ramp?: string | null;
  };
  inputs: {
    where: RampImageWhereInput;
    create: RampImageCreateInput;
    update: RampImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RampImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRampImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RampImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RampImageListTypeInfo,
    RampImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RampImageListTypeInfo,
  RampImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Lake: LakeListTypeInfo;
  readonly LakeImage: LakeImageListTypeInfo;
  readonly Ramp: RampListTypeInfo;
  readonly RampImage: RampImageListTypeInfo;
};
