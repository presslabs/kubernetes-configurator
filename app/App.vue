<template>
  <div id="app">
    <div class="particles-show">
      <div class="particles">

        <h3 class="title is-3">Basic info</h3>

        <div class="columns">
          <div class="column">

            <div class="block">
              <label class="label">Site name</label>
              <p class="control">
                <input class="input" type="text" placeholder="Site name" v-model="form.name">
                <span class="help">This name will be used in one of these places</span>
              </p>
            </div>

          </div>
          <div class="column">

            <div class="block">
              <label class="label">Choose site type</label>
              <p class="control">
                  <label class="radio">
                    <input type="radio" name="type" v-model="form.type" value="dev" />
                    Development site
                  </label>
                  <label class="radio">
                    <input type="radio" name="type" v-model="form.type" value="prod" />
                    Live site
                  </label>
                </p>
            </div>

          </div>
        </div>

        <div class="block is-vertical">
          <label class="label">Provider</label>
          <p class="control">
              <label class="radio">
                <input type="radio" name="provider" v-model="form.provider" value="minikube" />
                Minikube / docker for mac / docker for windows
              </label>
              <label class="radio">
                <input type="radio" name="provider" v-model="form.provider" value="google" />
                Google Kubernetes Engine
              </label>
              <label class="radio is-disabled">
                <input type="radio" name="provider" v-model="form.provider" value="amazon" disabled />
                Amazon Elastic Kubernetes Service
              </label>
              <label class="radio is-disabled">
                <input type="radio" name="provider" v-model="form.provider" value="azure" disabled />
                Azure Kubernetes Service
              </label>
            </p>
        </div>

        <h3 class="title is-3">Site details</h3>

        <div class="columns">
          <div class="column">

            <div class="block">
              <label class="label">Databse size</label>
              <div class="control has-addons">
                <input class="input" type="text" name="db"  v-model="form.db" placeholder="Database size" />
                <a class="button is-static is-disabled">
                  GB
                </a>
              </div>
            </div>

          </div>
          <div class="column" v-if="form.type === 'prod'">

            <div class="block">
              <label class="label">Page views</label>
              <div class="control has-addons">
                <input class="input" type="text" name="pageviews"  v-model="form.pageviews" placeholder="Total pageviews per month" />
                <a class="button is-static is-disabled">
                  /month
                </a>
              </div>
            </div>

          </div>
        </div>

        <h3 class="title is-3">Wordpress configuration</h3>

        <h5 class="title is-5">PHP Image</h5>

        <div class="block">
          <label class="label">Image version</label>
          <div class="select">
            <select v-model="form.wp_config.image">
              <option vlaue="image-1">image-1</option>
              <option vlaue="image-2">image-2</option>
              <option vlaue="image-3">image-3</option>
              <option vlaue="image-4">image-4</option>
            </select>
          </div>
        </div>

        <h5 class="title is-5">PHP Configuration</h5>

        <div class="columns">
          <div class="column">

            <div class="block">
              <label class="label">Workers count</label>
              <p class="control">
                <input class="input" type="number" name="workers" v-model="form.wp_config.workers">
              </p>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
          <div class="column">

            <div class="block">
              <label class="label">Workers memory</label>
              <div class="control has-addons">
                <input class="input" type="number" name="workers-memory"  v-model="form.wp_config.workers_memory" />
                <a class="button is-static is-disabled">
                  GB
                </a>
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
        </div>

        <div class="columns">
          <div class="column">

            <div class="block">
              <label class="label">Max execution time</label>
              <div class="control has-addons">
                <input class="input" type="number" name="max-exec"  v-model="form.wp_config.max_exec" />
                <a class="button is-static is-disabled">
                  /sec
                </a>
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
          <div class="column">

            <div class="block">
              <label class="label">Maximum upload size</label>
              <div class="control has-addons">
                <input class="input" type="number" name="max-upload"  v-model="form.wp_config.max_upload" />
                <a class="button is-static is-disabled">
                  MB
                </a>
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
        </div>

        <h5 class="title is-5">Object cache</h5>

        <div class="block">
          <label class="label">Total memory size</label>
          <div class="control has-addons">
            <input class="input" type="number" name="object-memory" v-model="form.object_memory" />
            <a class="button is-static is-disabled">
              GB
            </a>
          </div>
          <span class="help">This name will be used in one of these places</span>
        </div>

        <h5 class="title is-5">MySQL</h5>

        <div class="block">
          <label class="label">Total memory size</label>
          <div class="control has-addons">
            <input class="input" type="number" name="mysql-memory" v-model="form.mysql_memory" />
            <a class="button is-static is-disabled">
              GB
            </a>
          </div>
          <span class="help">This name will be used in one of these places</span>
        </div>

        <h5 class="title is-5">Storage</h5>

        <div class="block">
          <label class="label">Choose storage</label>
          <div class="select">
            <select v-model="form.storage">
              <option vlaue="storage-1">storage-1</option>
              <option vlaue="storage-2">storage-2</option>
              <option vlaue="storage-3">storage-3</option>
              <option vlaue="storage-4">storage-4</option>
            </select>
          </div>
          <span class="help">This name will be used in one of these places</span>
        </div>

        <div v-if="form.type === 'prod'">
          <h5 class="title is-5">MySQL layer</h5>

          <div class="block">
            <label class="label">Choose layer</label>
            <div class="select">
              <select v-model="form.storage">
                <option vlaue="layer-1">layer-1</option>
                <option vlaue="layer-2">layer-2</option>
                <option vlaue="layer-3">layer-3</option>
                <option vlaue="layer-4">layer-4</option>
              </select>
            </div>
            <span class="help">This name will be used in one of these places</span>
          </div>
        </div>

        <h3 class="title is-3">MySQL Parameters</h3>

        <div class="columns">
          <div class="column">

            <div class="block">
              <label class="label">Memory per node</label>
              <div class="control has-addons">
                <input class="input" type="number" name="mysql_param_node" v-model="form.mysql_param.node" />
                <a class="button is-static is-disabled">
                  GB
                </a>
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
          <div class="column">

            <div class="block">
              <label class="label">Disk size per node</label>
              <div class="control has-addons">
                <input class="input" type="number" name="mysql_param_disk" v-model="form.mysql_param.disk" />
                <a class="button is-static is-disabled">
                  GB
                </a>
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
          <div class="column">

            <div class="block">
              <label class="label">Scale / number</label>
              <div class="control has-addons">
                <input class="input" type="number" name="mysql_param_number" v-model="form.mysql_param.number" />
              </div>
              <span class="help">This name will be used in one of these places</span>
            </div>

          </div>
        </div>

        <h3 class="title is-3">Resulted Kubernetes parameters</h3>

        <table class="table is-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Limits</th>
              <th>Requests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Memory</td>
              <td>{{ form.kubernetes_params.limit_memory }}</td>
              <td>{{ form.kubernetes_params.requests_memory }}</td>
            </tr>
            <tr>
              <td>CPU</td>
              <td>{{ form.kubernetes_params.limit_cpu }}</td>
              <td>{{ form.kubernetes_params.requests_cpu }}</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="particle-zoom">
        <h3 class="title is-3">Generated configuration</h3>
        <button type="button"
          class="button is-info"
          v-clipboard:copy="basicTemplate"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">Copy!</button>
        <button
          type="button"
          class="button is-success"
          @click="onDownload">Download</button>
        <pre class="language-yaml"><code class="language-yaml" v-html="compiledTemplate"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Particle } from 'vue-particles-icons'
import _ from 'lodash'

import yamlProdTemplate from './config.prod.yaml'
import yamlDevTemplate from './config.dev.yaml'

const yamlTemplate = {
  prod: yamlProdTemplate,
  dev: yamlDevTemplate
}

export default {
  data: function() {
    return {
      form: {
        name: 'demo',
        type: 'dev',
        provider: 'minikube',
        db: 0,
        pageviews: 0,
        wp_config: {
          image: 'image-1',
          workers: 2,
          workers_memory: 2,
          max_exec: 30,
          max_upload: 6,
        },
        object_memory: null,
        mysql_memory: null,
        storage: 'storage-1',
        layer: null,
        mysql_param: {
          node: null,
          disk: null,
          number: 1
        },
        kubernetes_params: {
          limit_memory: 0,
          limit_cpu: 0,
          requests_memory: 0,
          requests_cpu: 0
        }
      },
    }
  },
  computed: {
    basicTemplate: function() {
      return _.template(yamlTemplate[this.form.type])(this.form)
    },
    compiledTemplate: {
      get: function() {
        return Prism.highlight(this.basicTemplate, Prism.languages.yaml, 'yaml')
      },
      set: function () {
        return Prism.highlight(this.basicTemplate, Prism.languages.yaml, 'yaml')
      }
    },
  },
  methods: {
    onDownload: function () {
      const url = window.URL.createObjectURL(new Blob([this.basicTemplate]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.form.name + '.yaml');
      document.body.appendChild(link);
      link.click();
    },
    onCopy: function (e) {
      this.$toaster.success('You just copied the configuration.')
    },
    onError: function (e) {
      this.$toaster.error('Failed to copy the configuration.')
    }
  },
  components: { Particle },
}
</script>

<style lang="scss">
@import "style";

#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray-1;
  padding: 140px 20px 0;
  @media screen and (min-width: 768px) {
    padding: 100px 20px 0;
  }
}

.particles-show {
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  .particles {
    flex: 1;
  }
  .particle-zoom {
    display: none;
    margin-bottom: 20px;
    @media screen and (min-width: 480px) {
      display: block;
      width: 50%;
      flex: 0 0 50%;
    }
    label {
      display: block;
      margin-top: 20px;
    }
  }
}

.is-vertical .control label {
  display: block;
  margin-left: 0;
  margin-bottom: 10px;
}

code[class*=language-] {
  background: none;
  font-size: 18px;
}

.number {
  font-size: inherit;
  background: none;
}

</style>
