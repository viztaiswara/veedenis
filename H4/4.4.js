// SWITCH 

var job = 'guru';

switch (job) {
    case 'guru':
        console.log ('kerjaannya ngajar.');
        break;
    case 'sopir':
        console.log('Kerjaannya nyetir.');
        break; //u/menghentikan pemrosesannya,
        //kaya 'stop titik' u/menghentikan proses.
    case 'polisi':
        console.log('Kerjaannya nilang.');
        break;
    default:
        console.log('Ada aja kerjaannya.');
}
//kalo 'break' diganti 'continue' = ga bisa,
// jadi oprasi untuk kasus ini hanya 'break' yang berlaku.