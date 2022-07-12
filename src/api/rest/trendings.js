import { makeRequests } from '../request'

// фукнция-помощник для формирования даты, лучше выносить в отдельные файлы отсюда
const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  // убедиться, что функция вызывается
  // console.log(lang)
  const params = new URLSearchParams()
  // нам нужны посты за последнюю неделю, поэтому добавляем дату, от которой считать, и рассчитываем, сколько милисекунд нам надо
  const weekMS = 7 * 24 * 60 * 60 * 1000
  // формируем дату из текущего значения милисекунд timestamp
  const weekAgo = new Date(Date.now() - weekMS)
  // форматируем дату. получаем цифру, оборачиваем функцией-помощником, чтобы добавить нули. и склеиваем в строку
  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  // параметры поиска
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequests({
    url: `/search/repositories?${params}`
  })
}
