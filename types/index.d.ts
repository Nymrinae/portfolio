type HeaderLinks = {
  name: string,
  path: string
}

type Network = {
  content: string,
  link: string,
  name: string,
  svgPath: string
}

type Language = {
  color: string,
  name: string,
  svgPath: string
}

type Project = {
  background: string | null,
  description: string,
  isEpitechProject: boolean,
  githubRepo: string,
  name: string,
  title: string,
  languages: Array<string>
}

type MailOptions = {
  email: string,
  message: string,
  name: string,
  subject: string
}

type Image = {
  imageSrc: string,
  websiteSrc?: string,
  height?: number,
  width?: number
}

type Logo = {
  color: string,
  height?: number,
  link?: string,
  name: string,
  isNetwork?: Boolean,
  svgPath: string,
  value?: string,
  websiteSrc?: string,
  width?: number
}

type Company = {
  name: string,
  description: string,
  duration: string,
  languages: Array<string>,
  logo: Image,
  title: string,
  type: string
}

type School = {
  name: string,
  description: string,
  duration: string,
  formation: string,
  location: string,
  logo: Image,
}