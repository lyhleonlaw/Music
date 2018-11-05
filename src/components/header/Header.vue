<template>
	<div class='v-header'>
		<div class="icon"></div>
		<h1 class="text">Music</h1>
	</div>
</template>


<style lang="stylus" scoped rel="stylesheet/stylus">
	@import "../../common/stylus/varibale"
	@import "../../common/stylus/mixin"
	.v-header
		position: relative
		height: 44px
		text-align: center
		color: $color-theme
		font-size:0
		/*border: 1px solid red*/
		.icon
			width : 30px
			height 32px
			/*border: 1px solid red*/
			vertical-align :top
			/*position: absolute*/
			bg-logo:('logo')
			display :inline-block
			margin-top 7px;
			background-size :30px 32px
			margin-right :9px
		.text
			line-height :33px
			vertical-align :top
			display :inline-block
			font-size: $font-size-large
		/*width:100%*/
		/*bottom:0*/
</style>