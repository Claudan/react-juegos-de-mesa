import styles from "./agregajuego.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const AgregaJuego = () => {
  const captcha = useRef<ReCAPTCHA>(null);
  const [captchaState, setCaptchaState] = useState({
    valido: false,
    touched: false,
  });

  const onChangeCaptcha = () => {
    if (captcha.current?.getValue()) {
      setCaptchaState({ valido: true, touched: true });
    } else {
      setCaptchaState({ valido: false, touched: true });
    }
  };
  const {
    values,
    setFieldValue,
    handleSubmit,
    getFieldProps,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      nombre: "",
      desarrollador: "",
      descripcion: "",
      edadMin: 4,
      jugadoresMin: 1,
      jugadoresMax: 2,
      imagen: [],
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setCaptchaState({ ...captchaState, touched: true });
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .max(30, "Debe tener máximo 30 caracteres")
        .required("Requerido"),
      desarrollador: Yup.string()
        .max(30, "Debe tener máximo 30 caracteres")
        .required("Requerido"),
      descripcion: Yup.string()
        .max(500, "Debe tener máximo 500 caracteres")
        .required("Requerido"),
      edadMin: Yup.number().min(1, "Mínimo es 1"),
      jugadoresMin: Yup.number().min(1, "Mínimo es 1"),
      jugadoresMax: Yup.number().min(1, "Mínimo es 1"),
      imagen: Yup.mixed()
        .required("Requerido")
        .test("fileType", "Formato de archivo no soportado", function (value) {
          if (value.length === 0) {
            return false;
          }
          const SUPPORTED_FORMATS = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/webp",
          ];
          return SUPPORTED_FORMATS.includes(value[0].type);
        })
        .test("fileSize", "El tamaño del archivo supera los 5MB", (value) => {
          if (value.length === 0) {
            return false;
          }
          const sizeInBytes = 5000000; //5MB
          return value[0].size <= sizeInBytes;
        }),
      email: Yup.string()
        .email("El correo no tienen un formato válido")
        .required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Agregar juego</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={"row"}>
                <div className="form-group">
                  <label>Nombre del juego</label>
                  <input
                    className="form-control"
                    type="text"
                    {...getFieldProps("nombre")}
                  />
                  {touched.nombre && errors.nombre && (
                    <span>{errors.nombre}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Desarrollador</label>
                  <input
                    className="form-control"
                    type="text"
                    {...getFieldProps("desarrollador")}
                  />
                  {touched.desarrollador && errors.desarrollador && (
                    <span>{errors.desarrollador}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <input
                  className="form-control"
                  type="text"
                  {...getFieldProps("descripcion")}
                />
                {touched.descripcion && errors.descripcion && (
                  <span>{errors.descripcion}</span>
                )}
              </div>
              <div className="form-group">
                <label>Edad mínima en años</label>
                <input
                  className="form-control"
                  type="number"
                  {...getFieldProps("edadMin")}
                />
                {touched.edadMin && errors.edadMin && (
                  <span>{errors.edadMin}</span>
                )}
              </div>
              <div className={"row"}>
                <div
                  className={`${styles.cantidadJugadoresMin} form-group col-6`}>
                  <label>Cantidad de jugadores mínima</label>
                  <input
                    className="form-control"
                    type="number"
                    {...getFieldProps("jugadoresMin")}
                  />
                  {touched.jugadoresMin && errors.jugadoresMin && (
                    <span>{errors.jugadoresMin}</span>
                  )}
                </div>
                <div
                  className={`${styles.cantidadJugadoresMax} form-group col-6`}>
                  <label>Cantidad de jugadores máxima</label>
                  <input
                    className="form-control"
                    type="number"
                    {...getFieldProps("jugadoresMax")}
                  />
                  {touched.jugadoresMax && errors.jugadoresMax && (
                    <span>{errors.jugadoresMax}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Imagen</label>
                <input
                  className="form-control"
                  name="imagen"
                  type="file"
                  onChange={(e) => {
                    setFieldValue("imagen", e.currentTarget.files);
                  }}
                />
                {touched.imagen && errors.imagen && (
                  <span>{errors.imagen}</span>
                )}
              </div>
              <div className="form-group">
                <label>Email usuario</label>
                <input
                  className="form-control"
                  type="email"
                  {...getFieldProps("email")}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Constraseña</label>
                <input
                  className="form-control"
                  type="password"
                  {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <div className="form-group">
                <div className={styles.captchaWrapper}>
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey={`${process.env.REACT_APP_CAPTCHA_WEB}`}
                    onChange={onChangeCaptcha}
                  />
                  {captchaState.valido === false && captchaState.touched ? (
                    <p>Por favor acepte la verificación</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} btn btn-primary`}>
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
