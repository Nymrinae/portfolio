type HeaderLinks = {
  name: string,
  path: string
}

type NetworksLinks = {
  icon: string,
  name: string,
  path: string
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
