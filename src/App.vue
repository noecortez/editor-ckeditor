<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
export default {
  data() {
    return {
      editor: DecoupledEditor,
      content: '',
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor
      }
    }
  },
  methods: {
    onReady(editor) {
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
    }
  }
}
</script>

<template>
  <ckeditor :editor="editor" v-model="content" :config="editorConfig" @ready="onReady"></ckeditor>
</template>

<style scoped>

</style>
