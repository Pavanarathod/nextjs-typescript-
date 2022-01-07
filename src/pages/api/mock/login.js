import { NextApiRequest, NextApiResponse } from "next";

import users from "@/pages/api/mock/data/users.json";

export default function handler(req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = users[userName];

  let response = {};

  if (user !== undefined && user.password === password) {
    response = {
      statusCode: "SUCCESS",
      status: "Success",
      data: {
        ...user,
        password: undefined
      },
    };
  } else {
    response = {
      statusCode: "FAILED",
      status: "Failed",
      data: null,
    };
  }

  res.status(200).json(response);
}
