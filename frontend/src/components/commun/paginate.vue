<template>
  <nav class="pagination is-right" role="navigation" aria-label="pagination" v-show="pages.total>0">
    <!--<a class="pagination-previous" title="This is the first page" @click="addPage()"
       v-if="pages.page!==pages.pages ">Siguiente</a>
    <a class="pagination-next" v-if="pages.page===1 && pages.page===1" @click="minusPage()">Anterior</a>-->
    <ul class="pagination-list" >
      <li v-for="(page) in pages.pages" @click="setNewPage(page)" :key="page">
        <a class="pagination-link " :class="{'is-current':page==pages.page }" :aria-label="'Page'+page"
           aria-current="page">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pages'],
  methods: {
    setNewPage: function (page) {
      if (page !== this.pages.page) {
        this.pages.page = page
        this.$parent.changePageTable(this.pages.page)
      }
    },
    addPage: function () {
      this.setNewPage(parseInt(this.pages.page) + 1)
    },
    minusPage: function () {
      this.setNewPage(parseInt(this.pages.page) - 1)
    }
  }
}
</script>
