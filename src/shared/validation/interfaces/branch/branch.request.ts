/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface IAddBranchRequest {
  active?: boolean;
  address?: IAddress;
  comment?: string;
  contactNumber: string;
  description?: string;
  fullName: string;
  logo?: string;
  manager?: string;
  name?: string;
  timezone?: string;
}

export interface IAddress {
  address?: string;
  city?: string;
  country?: string;
  postcode?: number;
  suburb?: string;
}

export interface IBranch {
  active?: boolean;
  address?: IAddress;
  comment?: string;
  contactNumber: string;
  description?: string;
  fullName: string;
  logo?: string;
  manager?: string;
  name?: string;
  timezone?: string;
}

export interface IUpdateBranchRequest {
  active?: boolean;
  address?: IAddress;
  comment?: string;
  contactNumber: string;
  description?: string;
  fullName: string;
  logo?: string;
  manager?: string;
  name?: string;
  timezone?: string;
}
