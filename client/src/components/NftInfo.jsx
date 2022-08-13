import React from 'react';

const NftInfo = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <div className='col-12' style={{ textAlign: 'center' }}>
        <h1>Создавать крипто-вещи это просто.</h1>
      </div>
      <div style={{ marginTop: 50, textAlign: 'center' }} className="d-flex">
        <div className='col-3'>
          <h5 >Настройте кошелек</h5>
          <p>
            После того, как вы настроите свой
            <br /> кошелек, подключите его к OpenMove.
            <br /> Щелкните на значок кошелька в правом верхнем углу.
            Узнайте о кошельках, которые мы поддерживаем.
          </p>
        </div>
        <div className='col-3'>
          <h5>Создайте свою коллекцию</h5>
          <p>
            Нажмите на кнопку профиля и настройте свою коллекцию. 
            Добавьте ссылки на социальные сети, описание, изображения 
            профиля и баннера, а также установите вторичную комиссию за продажу.
          </p>
        </div>
        <div className='col-3' >
          <h5>Добавьте свои крипто вещи</h5>
          <p>
            Загрузите свою работу, добавьте заголовок
            и описание и настройте свои NFT со свойствами, 
            статистикой и разблокируемым контентом.
          </p>
        </div>
        <div className='col-3'>
          <h5>Выставляйте их на продажу</h5>
          <p>
            Выбирайте между аукционами, 
            продажей по фиксированным ценам и 
            продажей с снижающейся ценой. 
            Вы сами выбираете, как вы хотите продавать 
            свои крипто вещи, а мы помогаем вам их продавать!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NftInfo;
