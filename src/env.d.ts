/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
  }
}

/* /// <reference path="../.astro/types.d.ts" />

import type { boolean } from "astro:schema";

interface User {
  email: string;
  name: string;
  avatar: string;
  emailVerified: Boolean;
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
  }
}
 */
