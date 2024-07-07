import { SectionPage } from '../../components/SectionPage'
import { Table } from '../../components/Table'

const employees = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 3,
    name: 'Maria',
    job: 'Front-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 4,
    name: 'Cleber',
    job: 'Back-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 5,
    name: 'Giovana',
    job: 'Designer',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 6,
    name: 'Mario',
    job: 'Front-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 7,
    name: 'Gabriel',
    job: 'Back-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 8,
    name: 'Carla',
    job: 'Back-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 10,
    name: 'Fernanda',
    job: 'Front-end',
    admission_date: '00/00/0000',
    phone: '+55 (55) 55555-5555',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
]

export function Employees() {
  return (
    <SectionPage title="Funcionários" hasSearch={true}>
      <Table
        dataTable={employees}
        gridTemplateColumns="1fr 2.5fr 1.75fr 2.5fr 2.5fr"
        thead={['Foto', 'Nome', 'Cargo', 'Data de admissão', 'Telefone']}
        keysToShow={['image', 'name', 'job', 'admission_date', 'phone']}
        keysAsImages={['image']}
      />
    </SectionPage>
  )
}
