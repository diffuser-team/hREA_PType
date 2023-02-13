import { useForm } from "react-hook-form";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import React from "react";
import { CONDUCTOR_URI, ADMIN_CONDUCTOR_URI, HOLO_APP_ID } from "../constants";
import useCreateWork from "../hooks/useCreateWork";

interface WorkForm {
  name: string;
  artist: string;
  iswc: string;
  comment: string;
}

export default function Web() {
  const { register, handleSubmit, getValues } = useForm<WorkForm>();
  const [createWork, { loading, data, error }] = useCreateWork();

  const onSubmit = async (data: WorkForm) => {
    const { name, iswc, artist, comment } = data;
    const res = await createWork(name, iswc, comment, artist);
    console.log(res);
  };

  const getWorks = async () => {
    const data = getValues();
    console.log("let's see what we have here");
    console.log(data);
  };

  /**
   * windbreaker on localhost:3000, dagooj on localhost:3001 if you decide to do that
   */
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <select {...register("artist")}>
            <option value="Wind">w1ndbr34k3R</option>
            <option value="Da">DAG00J</option>
          </select>
          <input placeholder="iswc" {...register("iswc")} />
          <input placeholder="name" {...register("name")} />
          <input placeholder="comment" {...register("comment")} />
          <input type="submit" />
        </div>
      </form>
      <div>
        <button onClick={() => getWorks()}>Get your artist's work 🔥</button>
      </div>
    </div>
  );
}
