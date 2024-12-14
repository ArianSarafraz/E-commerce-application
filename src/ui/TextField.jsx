function TextField({
  register,
  required,
  validationSchema,
  name,
  type,
  label,
  errors,
}) {
  return (
    <div>
      <label className="block text-blue-950" htmlFor={name}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="w-full p-2 border border-blue-950 rounded mt-2"
        required
      />
      {errors && errors[name] && (
        <span className="text-red-600 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
