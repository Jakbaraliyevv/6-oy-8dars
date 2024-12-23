import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Card from "./components/cards";

function App() {
  const queryClinet = useQueryClient();

  const { data } = useQuery({
    queryKey: ["TODO"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/YangiNashirlar")
        .then((value) => value.data),
  });

  const deletMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`http://localhost:5000/YangiNashirlar/${id}`),
    onSuccess: () => {
      queryClinet.invalidateQueries(["TODO"]);
    },
  });

  return (
    <>
      <div className="w-[90%] m-auto mt-5 grid grid-cols-3 gap-4">
        {data?.map((value) => (
          <Card key={value.id} {...value} deletMutation={deletMutation} />
        ))}
      </div>

      <h1 className="text-[green]">Salom</h1>
    </>
  );
}

export default App;
