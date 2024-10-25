const authServices = () => {
  const ping = () => {
    return "pong\n"
  }

  const services = {
    ping
  }

  return services
}

export default authServices