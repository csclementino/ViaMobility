import axios from "axios";

// Configuração do cliente Axios
const apiClient = axios.create({
  baseURL: "https://apim-proximotrem-prd-brazilsouth-001.azure-api.net/api/v1",
  headers: {
    "Ocp-Apim-Subscription-Key": "2548d4be3b2d460ca596a8e50c82bec9",
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// Função para buscar o próximo trem
export const getNextTrain = async (line, station, destination = "") => {
  try {
    const response = await apiClient.get(
      `/lines/${line}/stations/${station}/next-train${destination ? `/${destination}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o próximo trem:", error);
    return null;
  }
};

// Função para buscar informações da linha
export const getLineInfo = async (lineCode) => {
  try {
    const response = await apiClient.get("/lines");
    return response.data.Data.find((line) => line.Code === lineCode);
  } catch (error) {
    console.error("Erro ao buscar informações da linha:", error);
    return null;
  }
};