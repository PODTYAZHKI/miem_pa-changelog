<template>
	<div class="changelog-container">
		<el-row class="changelog-heading">
			<el-col :span="20" :offset="2">
				<h1 class="changelog-h1 semibold">История доработок</h1>
			</el-col>
		</el-row>
		<el-row class="changelog-body">
			<el-col :span="20" :offset="2">
				<div class="changelog-subtext">
					Привет! Мы команда личного кабинета. <br>И каждый день мы занимаемся развитием и улучшением нашего продукта. Здесь можно увидеть над чем мы работали в последнее время. <br> Если у вас есть предложения по улучшению, то выможете оставить их на странице <span>обратной связи</span>.
				</div>
				<div class="changelog-logs-wrapper">
					<ul>
						<li class="log" v-for="(log) in logs" :key="log.time">
							<div class="log-time">
								{{timeAgo(log.time)}}
							</div>
							<ul>
								<li class="item" v-for="item in log.data" :key="item.status">
									<div class="item-status" v-bind:class="{'status-new': item.status == 'новое', 'status-fixed': item.status == 'исправлено', 'status-improved': item.status == 'улучшено',}">
										{{item.status}}
									</div>
									<div class="item-info">
										{{item.info}}
									</div>
									<div class="item-more" v-if="item.more == true" v-on:click="item.isShow = !item.isShow">
										Подробнее
									</div>
									<div class="more-description" v-show="item.isShow">
										{{item.description}}
									</div>
									
								</li>
							</ul>
						</li>
					</ul>
				</div>
		
			</el-col>
		</el-row>

	</div>
</template>

<script>
export default {
	name: 'Changelog',
	data() {
		return {
			rightTime: '1',	
			logs:[
				{
					time: 'Tue Oct 20 2020 11:09:26 GMT+0300 (Москва, стандартное время)',
					data:[
						{
							status: 'новое',
							info: 'Добавлен блок достижений на страницу проекта и в личный профиль студентов. По скнопке “смотреть полный список” можно перейти на страницу со всеми возможными достижениями и увидеть условия их получения',
							more: true,
							isShow: false,
							description: 'Пройдено'

						},
						{
							status: 'улучшено',
							info: 'Мы переехали на новые сервера! Теперь скорость работы сайта стала выше. ',
							more: true,
							isShow: false,
							description: 'Пройдено'
						},
					]
				},
				{
					time: 'Mon Oct 25 2010 11:09:26 GMT+0300 (Москва, стандартное время)',
					data:[
						{
							status: 'исправлено',
							info: 'Починили удаление студентов из проектов. Руководители могут смело распрощаться с неактивными участниками.',
							more: true,
							isShow: false,
							description: 'Пройдено'
						},
						
					]
				},

			]
		}
	},
	methods: {
		trueDate: function(i, name){
			switch(name) {
				case 'hour':
					switch(i) {
						case 1:
							return 'час'
						case 2:
						case 3:
						case 4:
							return 'часа'
						default:
							return 'часов'
					}
				case 'day':
					switch(i) {
						case 1:
							return 'день'
						case 2:
						case 3:
						case 4:
							return 'дня'
						default:
							return 'дней'
					}
				case 'month':
					switch(i) {
						case 1:
							return 'месяц';
						case 2:
						case 3:
						case 4:
							return 'месяца';
						default:
							return 'месяцев';
					}
				case 'year':
					switch(i) {
						case 1:
							return 'год';
						case 2:
						case 3:
						case 4:
							return 'года';
						default:
							return 'лет';
					}

			}
			return i + name
		},
		timeAgo: function(index){
			let dateNow = new Date()
			let datePost = new Date(index)
			let diffYears = dateNow.getFullYear() - datePost.getFullYear()
			let diffMonths = dateNow.getMonth() - datePost.getMonth()
			let diffDays = dateNow.getDay() - datePost.getDay()
			let diffHours = dateNow.getHours() - datePost.getHours()


			if (diffYears == 0)
				if (diffMonths == 0)
					if (diffDays == 0)
						if (diffHours == 0)
							return 'Недавно'
						else return diffHours + ' ' + this.trueDate(diffHours, 'hour') + ' назад'
					else return diffDays + ' ' + this.trueDate(diffDays, 'day') + ' назад'
				else return diffMonths + ' ' + this.trueDate(diffMonths, 'month') + ' назад'
			else return diffYears + ' ' + this.trueDate(diffYears, 'year') + ' назад'
		},
	}


}
</script>

<style scoped lang="scss">
	@import "style.scss";

</style>