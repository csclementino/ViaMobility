// app/types.ts
export interface UserProfile {
    id: string;
    profileImage: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isEmailVerified: boolean;
  }
  
  export type ProfileFieldType = 
    | 'text'
    | 'phone'
    | 'email'
    | 'password';