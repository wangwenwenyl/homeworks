<template>
    <div class="nodata" style="overflow-Y:scroll;">
        <div id="Tips" style="text-align: center; color: #999999;">
            <img style="width: 121px;height: 120px;margin-top: 75px;" src="../assets/img/notFound.png" alt="" />
            <div style="margin-top: 25px;">
                <span>暂无数据</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        mounted(){
          this.fillPage('.nodata');
        }
    }
</script>
