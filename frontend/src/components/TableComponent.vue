<template>
  <div class="container">
    <div class="title">
      <h3 class="page-header">
        <img src="../images/handsTable.png" alt="hands icon" /> Notas Fiscais
      </h3>
      <p class="title-text">Visualize as notas fiscais que você tem.</p>
    </div>

    <table>
      <thead>
        <tr class="header">
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table in tableData" :key="table.id" class="table-container">
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
          <td>{{ table.value }}</td>
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
    const formatter = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    response.data.forEach((element) => {
      element.value = formatter.format(element.value);
    });
    console.log(response.data);
    this.tableData = response.data;
  },
};
</script>

<style scoped>
.title {
  color: rgb(2, 27, 81);
  margin-top: 40px;
}
.page-header {
  font-weight: bold;
}
.title-text {
  font-size: 14px;
}
table {
  height: 1vh;
  width: 80%;
  border-collapse: separate;
  border-spacing: 0 1rem;
}
/* .container {
  float: left;
} */

tr,
td {
  font-size: 14px;
}

.table-container {
  border-radius: 6px;
  box-shadow: 0px 0px 1px 1px red;
}

td,
th {
  /* margin-left: 100px; */
  text-align: start;
  padding: 10px 10px;
}

.header th {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
}

tr button {
  padding: 7px 15px;
  margin-right: -70px;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.8);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

tr td:nth-child(5),
tr td:nth-child(6) {
  color: rgb(0, 173, 140);
}

/* .container {
  background: red;
  background-color: red !important;
  box-shadow: 0px 10px 30px red;
  border-radius: 15px 0px 0px;
} */
</style>
