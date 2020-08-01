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

type Project = {
  background: string | null,
  description: string,
  isEpitechProject: boolean,
  githubRepo: string,
  name: string,
  title: string,
  languages: Array<string>
}
