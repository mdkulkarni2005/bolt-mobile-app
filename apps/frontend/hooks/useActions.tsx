import { BACKEND_URL } from "@/config";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { get } from "http";
import { type } from "os";
import { useEffect, useState } from "react";

interface Action {
  id: string;
  content: string;
  createdAt: Date;
}

export function useActions(projectId: string) {
  const [actions, setactions] = useState<Action[]>([]);
  const { getToken } = useAuth();

  useEffect(() => {
    async function getactions() {
      const token = await getToken();
      axios
        .get(`${BACKEND_URL}/actions/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setactions(res.data.actions);
        });
    }
    getactions();
    let interval = setInterval(getactions, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    actions,
  };
}
