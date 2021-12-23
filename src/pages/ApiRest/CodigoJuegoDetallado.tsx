import { useJuegoDetallado } from "../../hooks/useJuegoDetallado";

interface Props {
  consultado: string;
}

export const CodigoJuegoDetallado = ({ consultado }: Props) => {
  const { juego, isLoading } = useJuegoDetallado(consultado);

  return (
    <>
      {isLoading ? (
        <>Cargando... </>
      ) : (
        <pre>{JSON.stringify(juego, null, 4).replace(/["[,\\]]/g, "")}</pre>
      )}
    </>
  );
};
