const Input = ({ formik, label, name, type, placeholder = "" }) => {

  return (
    <div>
      <div className="flex mb-1 justify-between items-center">
        <label className="mr-2" htmlFor={name}>{label}</label>
        {formik.errors[name] && formik.touched[name] && <p className="text-red-500 text-sm">{formik.errors[name]}</p>}
      </div>
      <input
      dir="ltr"
        type={type || "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        {...formik.getFieldProps(name)}
        className="outline-none w-full mb-3 border-2 px-2 py-1 rounded-lg border-gray-500"
      />
    </div>
  );
};

export default Input;
