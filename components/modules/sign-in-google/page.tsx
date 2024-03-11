"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const SignInGoogle = () => {
  const { data } = useSession();

  return (
    <div>
      <div className="flex justify-center items-center">
        {data?.user ? (
          <div>
            <Avatar
              src={data?.user?.image || "/images/user.png"}
              alt="avatar"
              sx={{ width: 56, height: 56 }}
            />
            <h1 className="text-[18px] my-4">Hi, {data?.user?.name}</h1>
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignInGoogle;
