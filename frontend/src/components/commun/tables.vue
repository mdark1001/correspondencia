<template>
  <div class="table-container">
    <table class="table is-bordered is-striped is-fullwidth">
      <!-- Your table content -->
      <thead>
      <tr class="is-selected">
        <th v-for="(header,index) in headers" :key="'header_'+index">
          {{header.name }}
        </th>
        <td v-if="showActions">
          Acciones
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(d,index) in ddata" :key="index">
        <td v-for="(header,i) in headers" :key="'td_'+i+'_'+d.__id">
          {{ d[header.value] }}
        </td>
        <td v-if="showActions">

          <a v-for="action in showActions" :key=" action.name+'_'+d._id"
             :data-action_name="action.name"
             @click="executeAction(action.name,d[action.key])"
             class="button  is-outlined" :class="action.class_name">
               <span class="icon is-medium">
                <i :class="action.icon"></i>
              </span>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  props: ['headers', 'ddata', 'pagination', 'showActions'],
  data: function () {
    return {}
  },
  methods: {
    executeAction: function (actionName, params) {
      this.$emit('executeAction', {
        actionName: actionName,
        params: params
      })
    }
  }
}
</script>
