"use client";

import { FC, PropsWithChildren } from "react";
import { ClerkProvider, SignUp, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import Loader from "@/components/Loader";

interface Props extends PropsWithChildren {

}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvextClientProvider: FC<Props> = ({ children }) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <div className="w-full h-full flex justify-center items-center">
          <Authenticated>
            {children}
          </Authenticated>
          <Unauthenticated>
              <SignUp />
          </Unauthenticated>
          <AuthLoading>
            <Loader />
          </AuthLoading>
        </div>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
