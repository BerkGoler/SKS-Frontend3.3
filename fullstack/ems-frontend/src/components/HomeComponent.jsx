import React from 'react'
import {Link} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';



const HomeComponent = () => {

    return (
    <div>
        <HeaderComponent/>
        <div className='screen-image'>
            <div className="overlay"></div>
            <img src=""/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Haberler</h5>
                                <p className="card-text"><b>Avrupa’ya lojistikte Türkiye’nin rolü artıyor.</b> <br />
Boltas Logistics CEO’su Selman Çoban, Kızıldeniz krizi ve diğer konjonktürel nedenlerle Türkiye’nin lojistik öneminin arttığını belirterek,
 “Avrupa’ya erişimle ilgili birçok firmanın farklı kanallar oluşturmak için çeşitli girişimleri var. Bunun ihracatçı firmalarımız açısından önemli
  fırsatlar yaratacağını ve lojistik sektörüne pozitif yansıyacağını öngörüyoruz” dedi.</p>
                                <a href="#" className="btn btn-primary">Tüm Haberler</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Duyurular</h5>
                                <p className="card-text"><b>MIP</b> <br />Değerli Paydaşlarımız, <br />
Mersin Uluslararası Limanı olarak, liman çalışanları, kullanıcıları ve ziyaretçilerinin güvenliğini
önceliklendiren bir yaklaşımla hizmet sağlamaktayız. Daha evvel yapılan düzenlemelere ek iş kazası
riskinin azaltılması ve daha güvenli bir çalışma ortamı tesis edilmesi adına limanın batı kısmını
(Reefer kavşaktan 21 numaralı rıhtıma kadar olan çizginin batı yakası) araç trafiğinden arındırmak
amacıyla araç-giriş çıkışlarında aşağıdaki düzenlemelere gidilecektir.
Aşağıda listelenen uygulamalara 6 Mart 2024 itibariyle başlanacaktır:
Uygulama Kapsamındaki Taraflar:
<br />
<br />
Gümrük Müşavirlikleri
<br />
Denetçiler ve Gözlem Şirketleri
<br />
Dezenfeksiyon ve Fumigasyon Şirketleri
<br />
Kumanya vb. Tedarikçi Şirketler
<br />
Acente Çalışanları</p>
                                <a href="#" className="btn btn-primary">Tüm Duyurular</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
    );
}

export default HomeComponent
