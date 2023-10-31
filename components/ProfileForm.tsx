"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TipTap from "./TipTap";
import { error } from "console";
type Inputs = {
  example: string;
  exampleRequired: string;
};

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="form-control w-full max-w-xs">
        <label htmlFor="name" className="label">
          <span className="label-text text-accent">What is your name?</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent  w-full max-w-xs"
          {...register("exampleRequired", { required: true })}
        />
        <label className="label">
          {errors.exampleRequired && (
            <span className=" text-error">This field is required</span>
          )}
        </label>
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="name" className="label">
          <span className="label-text text-accent">What is your name?</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent  w-full max-w-xs"
          {...register("exampleRequired", { required: true })}
        />
        <label className="label">
          {errors.exampleRequired && (
            <span className=" text-error">This field is required</span>
          )}
        </label>
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="name" className="label">
          <span className="label-text text-accent">What is your name?</span>
        </label>
        <textarea
        id="name"
        // type="text"
        placeholder="Type here"
          className="textarea textarea-secondary"
          {...register("exampleRequired", { required: true })}
        ></textarea>
       
        <label className="label">
          {errors.exampleRequired && (
            <span className=" text-error">This field is required</span>
          )}
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Save
      </button>
      <input type="submit" />
    </form>
  );
};

export default ProfileForm;
