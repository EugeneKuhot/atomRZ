<template>

  <div id="app">
    <header>
      <h1 class="header-title">
        Coronavirus
        <span class="header-title--yellow-style">Dashboard</span>
      </h1>
      <h2 class="header-creator-title">
        Created by
        <a href="https://github.com/EugeneKuhot" target="_blank">Eugene Kuhot</a>
      </h2>

    </header>
    <div class="content">
      <main>
        <nav class="subscribe">
          <button type="button" class="btn-3d-sub" @click="$router.push('/')">Table</button>
          <button type="button" class="btn-3d-sub" @click="$router.push('/chart')">Chart</button>
        </nav>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>

  import Table from "./components/Table";
  import Chart from "./components/Chart";
  import NotFound from "./components/404";

  export default {
    components: {
      Table,
      Chart,
      NotFound
    },

    data() {
      return {
        title: "Coronavirus",
        component: "Table"
      }
    }
  }

</script>

<style>

  * {
    outline: none;
  }

  body {
    color: #A7A1AE;
    background-color: #1F2739;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .header-title {
    font-size: 3em;
    font-weight: 100;
    line-height: 1em;
    text-align: center;
    color: #4DC3FA;
  }

  .header-title--yellow-style {
    color: #FFF842;
  }

  .header-creator-title,
  .header-creator-title a {
    font-size: 1.2em;
    font-weight: 300;
    text-align: center;
    line-height: 1em;
    padding-bottom: 2em;
    color: #FB667A;
    transition: .3s all ease;
  }

  .header-creator-title {
    display: block;
  }

  .header-creator-title a:hover {
    opacity: .6;
    transition: .3s all ease;
  }

  .subscribe {
    display: flex;
    width: 600px;
    margin: 0 auto 30px;
  }

  ul {
    list-style: none;
  }

  .btn-3d-sub {
    display: block;
    margin: 0 auto;
    width: 30%;
    height: 50px;
    font-family: Helvetica;
    border-bottom: 5px solid #173814;
    border-top: none;
    border-left: none;
    border-right: none;
    background: linear-gradient(#469e3f, #255b20);
    color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 10px grey;
    transition: 150ms ease;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    cursor: pointer;
  }

  .btn-3d-sub:active {
    border: none;
    border-bottom: 2px solid steelblue;
    box-shadow: 0px 1px 5px grey;
    background: linear-gradient(#255b20, #469e3f);
    color: #FFF;
  }

</style>
