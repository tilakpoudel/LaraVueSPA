<template>
  <div>
    <div class="content">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Tags
            <Button @click="addModal = true">
              <Icon type="md-add" />Add Tags
            </Button>
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
              <!-- TABLE TITLE -->
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
              <!-- TABLE TITLE -->

              <!-- ITEMS -->
              <!-- <div> -->
              <tr v-for="(tag ,i) in tags" :key="i" v-if="tags.length">
                <td>{{tag.id}}</td>
                <td class="_table_name">{{tag.tagName}}</td>
                <td>{{tag.created_at}}</td>
                <td>
                  <Button type="info" size="small" @click="showEditModal(tag, i)">Edit</Button>
                  <Button type="error" size="small">Delete</Button>
                </td>
              </tr>
              <!-- </div> -->

              <!-- ITEMS -->
            </table>
          </div>
        </div>
        <Page :total="100" />

        <!-- tag adding modal  -->
        <Modal v-model="addModal" title="Add Tag" :closable="true" :mask-closable="false">
          <Input v-model="data.tagName" prefix="ios-contact" placeholder="Enter Tag" />

          <div slot="footer">
            <Button type="default" @click="addModal=false, isAdding=false">Cancle</Button>
            <Button
              type="primary"
              @click="addTag"
              :disabled="isAdding"
              :loading="isAdding"
            >{{isAdding ? "Adding... ": "Add tag"}}</Button>
          </div>
        </Modal>

        <!-- tag editing modal  -->
        <Modal v-model="editModal" title="Edit Tag" :closable="true" :mask-closable="false">
          <Input v-model="editData.tagName" prefix="ios-contact" placeholder="Edit Tag" />

          <div slot="footer">
            <Button type="default" @click="editModal=false, isAdding=false">Cancle</Button>
            <Button
              type="primary"
              @click="editTag"
              :disabled="isAdding"
              :loading="isAdding"
            >{{isAdding ? "Editing... ": "Edit tag"}}</Button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        tagName: "",
      },
      addModal: false,
      editModal: false,
      isAdding: false,
      tags: [],

      editData: {
        tagName: "",
      },
      index: -1,
    };
  },
  methods: {
    async addTag() {
      // front end validation
      if (this.data.tagName.trim() == "") {
        return this.error("Tag Name is Required.");
      }
      const res = await this.callApi("post", "app/create_tag", this.data);
      // console.log(res);
      this.isAdding = true;
      if (res.status === 201) {
        this.tags.unshift(res.data);
        this.success("Tag has been Created Sucessfully !");
        this.data.tagName = "";
        this.addModal = false;
        this.isAdding = false;
      } else {
        if (res.status === 422) {
          if (res.data.errors.tagName) {
            this.isAdding = false;
            this.error(res.data.errors.tagName[0]);
          }
        } else {
          console.log(res);
          this.somethingWentWrong("Something went wrong");
        }
      }
    },

    // edit tag
    async editTag() {
      // front end validation
      if (this.editData.tagName.trim() == "") {
        return this.error("Tag Name is Required.");
      }
      const res = await this.callApi("post", "app/update_tag", this.editData);
      // console.log(res);
      this.isAdding = true;
      if (res.status === 200) {
        this.tags[this.index].tagName = this.editData.tagName;

        this.success("Tag has been Edited Sucessfully !");
        this.editData.tagName = "";
        this.editModal = false;
        this.isAdding = false;
      } else {
        if (res.status === 422) {
          if (res.data.errors.tagName) {
            this.isAdding = false;
            this.error(res.data.errors.tagName[0]);
          }
        } else {
          console.log(res);
          this.somethingWentWrong("Something went wrong");
        }
      }
    },

    showEditModal(tag, index) {
      let obj = {
        id: tag.id,
        tagName: tag.tagName,
      };
      this.index = index;
      this.editData = obj;
      this.editModal = true;
    },
  },

  async created() {
    const res = await this.callApi("get", "app/get_tag");
    if (res.status === 200) {
      this.tags = res.data;
    } else {
      somethingWentWrong();
    }
  },
};
</script>

<style></style>
