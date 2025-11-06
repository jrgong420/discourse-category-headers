import Component from "@glimmer/component";

export default class CategoryNotificationsWrapper extends Component {
  get componentName() {
    return this.args.componentName;
  }

  <template>
    {{component
      this.componentName
      category=@category
      value=@value
    }}
  </template>
}

