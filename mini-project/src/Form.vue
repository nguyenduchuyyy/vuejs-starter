<template>
  <div>
    <div class="col-md-6 text-justify" style="float:left">
      <h1 style="text-align:center; color:red">Form section</h1>
      <hr>
      <form action="" ></form>
      <div class="form-group p-3">
        <p for="exampleInputEmail1">Username</p>
        <input type="text" class="form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model.lazy="userData.username">
      </div>
      <div class="form-group p-3">
        <p for="exampleInputPass">Password</p>
        <input type="password" class="form-control-lg" id="exampleInputPass" placeholder="Enter Password" v-model.lazy="userData.password">
      </div>
      <div class="form-group p-3">
        <p for="exampleInputAge">Age</p>
        <input type="age" class="form-control-lg" id="exampleInputAge" placeholder="Enter Age" v-model.lazy="userData.age">
      </div>
      <div class="form-group p-3">
        <p for="exampleInputAge">Note</p>
        <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
      </div>

      <div class="p-3">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Accept" v-model="checkBox">
          <label class="form-check-label" for="inlineCheckbox1">Accept</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Not Accept" v-model="checkBox">
          <label class="form-check-label" for="inlineCheckbox2">Not accept</label>
        </div>
    
      </div>

      <div class="p-3">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Men" v-model="sex">
          <label class="form-check-label" for="inlineRadio1">Men</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Women" v-model="sex">
          <label class="form-check-label" for="inlineRadio2">Women</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Unknow" v-model="sex">
          <label class="form-check-label" for="inlineRadio3">Unknow</label>
        </div>

        <div class="">
          <label class="my-3 mr-2" for="inlineFormCustomSelectPref">Preference</label>
          <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="selected">
            <option disabled value="">Vui lòng chọn..</option>
            <option v-for="(item, index) in select" :key="item">{{item}}</option>
          </select>
        </div>

        <div class="col-auto my-3">
          <button type="submit" class="btn btn-primary" @click.prevent="submitedForm">Submit</button>
        </div>

      </div>

      

    </div>
    <div class="col-md-6 " style="float:left;position:fixed;left: 50%;" v-if="submitedCheck">
        <table class="table table-striped">
          <h1>Result Table</h1>
          <tbody>
            <tr>
              <th scope="row">Username</th>
              <td> {{userData.username}} </td>
            </tr>
            <tr>
              <th scope="row">Password</th>
              <td>{{userData.password}}</td>
            </tr>
            <tr>
              <th scope="row">Age</th>
              <td>{{userData.age}}</td>
            </tr>
            <tr>
              <th scope="row">Note</th>
              <td style="white-space:pre">{{message}}</td>
            </tr>
            <tr>
              <th scope="row">Checkbox</th>
              <td>
                <li v-for="item of checkBox">{{item}}</li>
              </td>
            </tr>
            <tr>
              <th scope="row">Sex</th>
              <td>{{sex}}</td>
            </tr>
            <tr>
              <th scope="row">select</th>
              <td>{{selected}}</td>
            </tr>
            
          </tbody>
        </table>
    </div>
  </div>

</template>

<script>


export default {
  data: function(){
    return{
      userData:{
        username:'',
        password:'',
        age:0
      },
      message:'Note is here',
      checkBox:[],
      sex:'',
      select:['admin','view','author'],
      selected:'',
      submitedCheck: false
    }
  },
  components: {
  },
  methods: {
    submitedForm(){
      this.submitedCheck =true;
    }
  },
}
</script>

<style>

</style>
