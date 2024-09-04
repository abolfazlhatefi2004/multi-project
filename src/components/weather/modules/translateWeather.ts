export default function translateWeather(weather: string, isEnglish?: boolean): string {
    if (isEnglish) return weather
    switch (weather.toLowerCase()) {
      case 'clear':
        return 'تمیز'
  
      case 'clouds':
        return 'ابری'
  
      case 'drizzle':
        return 'نم نم باران'
  
      case 'rain':
        return 'باران'
  
      case 'fog':
        return 'مه'
  
      case 'sand':
        return 'ریزگراد'
  
      case 'smoke':
        return 'آلودگی دود'
  
      case 'snow':
        return 'بارش برف'
  
      case 'squall':
        return 'بوران'
  
      case 'sunny':
        return 'آفتابی'
  
      case 'thunderstorm':
        return 'طوفان رعد و برق'
  
      default:
        return 'تصویر پیدا نشد'
  
    }
  }
  