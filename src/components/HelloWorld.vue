<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      @ready="onReady"
    ></ckeditor>
  </div>
</template>

<script>
//import DecoupledEditor from "ckeditor5-custom-build/build/ckeditor";
import CKEditor from "@ckeditor/ckeditor5-vue";
import Editor from "ckeditor5-custom-build";

export default {
  name: "app",
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: Editor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
  },
};
</script>
