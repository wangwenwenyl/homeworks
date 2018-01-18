<template>
		<div style="overflow-Y:scroll;">
			 <FollowManageTop tle="面谈统计"></FollowManageTop> 
 				<interviewForm></interviewForm>
				<interviewDataDetail></interviewDataDetail>
		</div>	
</template>
 <script type="text/javascript">
import FollowManageTop from '@/components/FollowManageTop';
 import interviewForm from '@/components/interviewForm';
import interviewDataDetail from '@/components/interviewDataDetail';
 export default {
  components:{
		'FollowManageTop':FollowManageTop,
		'interviewForm':interviewForm,
		'interviewDataDetail':interviewDataDetail,
  }
}
</script>
<style scoped>
	body{background:#fff;}
</style>
