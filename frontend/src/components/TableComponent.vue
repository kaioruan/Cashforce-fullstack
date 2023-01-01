<template>
  <div class="title">
    <h3 class="page-header">
      <img src="../images/handsTable.png" alt="hands icon" /> Notas Fiscais
    </h3>
    <p class="title-text">Visualize as notas fiscais que você tem.</p>
  </div>
  <div>
    <table v-if="!isLoading">
      <thead>
        <tr class="table-headers">
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table in tableData" :key="table.id" class="table-data">
          <td>
            {{ table.nNf }}
          </td>
          <td>
            {{ table.buyer.name }}
          </td>
          <td>
            {{ table.provider.name }}
          </td>
          <td>
            {{
              table.emissionDate.split("T")[0].split("-").reverse().join("-")
            }}
          </td>
          <td>
            {{ table.value }}
          </td>
          <td>
            {{ table.status }}
          </td>

          <td>
            <button type="button">Dados do cedente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TableComponent",
  data: function () {
    return {
      tableData: [],
    };
  },
  async created() {
    const response = await axios.get("http://localhost:3001/");
    const STATUS_NF = [
      "Pendente de confirmação",
      "Pedido confirmado",
      "Não reconhece o pedido",
      "Mercadoria não recebida",
      "Recebida com avaria",
      "Devolvida",
      "Recebida com devolução parcial",
      "Recebida e confirmada",
      "Pagamento Autorizado",
    ];
    response.data.forEach((element) => {
      element.status = STATUS_NF[Number(element.orderStatusBuyer)];
    });
    console.log(response.data);
    this.tableData = response.data;
  },
};
</script>

<style scoped>
.title {
  color: rgb(2, 27, 81);
}
.page-header {
  font-weight: bold;
}
.title-text {
  font-size: 14px;
}
</style>
