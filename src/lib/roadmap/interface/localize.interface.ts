export interface Localize {
  TITLE: {
    [key: string]: string
  },
  DESC: {
    [key: string]: string
  },

}

export namespace Localize {
  export function def() {
    return {
      TITLE: {},
      DESC: {}
    }
  }
}