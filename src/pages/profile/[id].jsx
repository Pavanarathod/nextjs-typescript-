import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const MyProfile = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>this is my profilepage..</h1>
      <Link href="/profile/medical">medical information</Link>
      <Link href="/profile/pavan">medical information</Link>
      <Link href="/profile/malatesh">medical information</Link>
      <Link href="/profile/priya">medical information</Link>
      <Link href="/profile/ramdas">medical information</Link>
    </div>
  );
};

export default MyProfile;
