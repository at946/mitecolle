import { NextPage } from 'next';
import Motion from '../components/common/motion';

const ToS: NextPage = () => {
  return (
    <Motion>
      <section className='section'>
        <h1 className='title is-4'>利用規約</h1>
        <p className='content'>
          この利用規約は（以下、「本規約」といいます。）は、mitecolle（以下、「本サービス」といいます。）の利用条件を定めるものです。
          ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </p>

        <ol className='content' style={{ listStylePosition: 'inside' }}>
          <li className='title is-5'>規約の適用</li>
          <div className='content'>
            <p>本規約は、ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。</p>
          </div>

          <li className='title is-5'>規約の変更</li>
          <div className='content'>
            <ul>
              <li>
                本サービスはユーザーの了解を得ることなく本規約を変更することがあります。この場合、本サービスの利用条件は、変更後の本規約によるものとします。
              </li>
              <li>
                変更後の規約は、別途定める場合を除き、本サービス上に表示した時点より効力を生じるものとします。
              </li>
            </ul>
          </div>

          <li className='title is-5'>禁止行為</li>
          <div className='content'>
            <p>
              運営元は、ユーザーが次の各号のいずれかに該当すると判断した場合、ユーザーへの事前の通知若しくは催告を要することなく、利用禁止処分または本利用規約の全部若しくは一部を解約することができるものとします。
            </p>
            <ul>
              <li>本サービスの運営を妨害する行為。</li>
              <li>
                コンピュータウィルス等の有害なコンピュータプログラム等を送信または頒布する行為、チェーンメール・スパムメール等の送信を目的とする行為、並びに本サービスに著しく負荷のかかる行為。
              </li>
              <li>本サービスにより利用しうる情報を改ざんまたは消去する行為。</li>
              <li>
                運営元または第三者の財産、プライバシー、名誉または肖像権を侵害する行為、または侵害するおそれのある行為、ストーカー的行為。
              </li>
              <li>
                運営元または第三者を差別・誹謗中傷し、その名誉または信用を毀損する行為、並びに人種的・民族的・宗教的に不快感を与える行為。
              </li>
              <li>
                わいせつな映像・画像等の配信またはそれらを掲載する他のウェブサイトへの誘導をする行為。
              </li>
              <li>その他、公序良俗に違反し、または他者の権利を侵害すると運営元が判断した行為。</li>
              <li>その他運営元が不適切であると判断する行為。</li>
            </ul>
          </div>

          <li className='title is-5'>サービスの一時的な中断</li>
          <div className='content'>
            <p>
              運営元は、次の各号いずれかの事由に該当する場合、ユーザーに事前に通知することなく、一時的に本サービスの運営を中断することがあります。
            </p>
            <ul>
              <li>本サービスまたは関連設備の保守を定期的または緊急に行うとき。</li>
              <li>本サービスで利用する通信回線、電力等の提供が中断されたとき。</li>
              <li>
                火災、停電、地震、台風、洪水、津波等の天災や疫病の発生等、運営元が支配できない事情（運営元が利用しているサーバーで生じた事情を含みます。）により本サービスの運営ができないとき。
              </li>
              <li>その他運営元が必要と判断したとき。</li>
            </ul>
            <p>
              運営元は、理由を問わず、本サービスの運営の遅滞、中断または停止に起因して、ユーザー、顧客または第三者が被った損害について、一切責任を負わないものとします。
            </p>
          </div>

          <li className='title is-5'>免責事項</li>
          <div className='content'>
            <p>
              本サービスは、ユーザーに事前に通知することなく、一時的に本サービスの運営を中断することがあります。
            </p>
            <ul>
              <li>
                本サービスの利用において、ユーザーの責により運営元その他の第三者に損害が発生した場合または権利が侵害された場合においてこれを解決するものとし、本サービス及び当該第三者に損害を賠償することとします。
              </li>
              <li>
                天災地変、戦争・暴動・内乱、法令の制定・改廃、公権力による命令・処分、ストライキ等の争議行為、輸送機関の事故、その他当事者の責に帰し得ない事由による本利用規約に基づく債務の履行の遅滞または不能が生じた場合は、当該当事者はその責を負わないものとします。
              </li>
              <li>
                運営元は、ユーザーに対し、以下の各号に該当する損害、ならびに以下の各号に付随する２次的なデータの漏洩、損失、損害にかかる損害について責任を負わないものとします。
              </li>
              <ul>
                <li>運営元が提供していないプログラムによって生じる損害。</li>
                <li>運営元以外の第三者による不正な行為によって生じる損害。</li>
                <li>ハッカー及びクラッカーによるサーバーへの侵入または攻撃等の行為による損害。</li>
                <li>
                  運営元が本サービスのために用いるサーバーにおいて生じた事情により生じる損害。
                </li>
                <li>本サービスのバグによって生じる損害。</li>
              </ul>
              <li>
                運営元は、本サービスについて、その完全性、特定目的適合性、その他一切保証しないものとします。運営元は、本サービスや本サイトの提供が中断することなく継続することを保証しません。本サービスは、本サービスや本サイトの提供が停止または中止した場合も、ユーザーや第三者に生じた損害について責任を負いません。
              </li>
              <li>
                運営元は、本サービスにユーザーがアップロードするデータ・情報に関しては、一切責任を負わないものとします。本サービスにアップロードするデータ・情報の正確性や当該情報をアップデートする責任は、全てユーザーにあります。
              </li>
              <li>
                運営元は、本サイトでの広告の表示・掲載を、第三者について行う場合があります。ユーザーが、本サイトでの広告を通じて第三者から商品・サービスを購入する等、第三者と何らかの契約をされる場合、当該契約の当事者はユーザーと第三者であり、本サービスはいかなる責任も負いません。
              </li>
              <li>
                ユーザーは、本サービスに保存するデータについて、自らバックアップを行う義務を負います。運営元は、本サービスにおいて、運営元の管理下にあるインターネットサーバーに保管・蓄積されるユーザーのデータについてバックアップを行いますが、本サービスに保管・蓄積されたユーザーのデータが消失、毀損した場合にも、本サービスはユーザーや第三者に対していかなる責任も負いません。
              </li>
            </ul>
          </div>

          <li className='title is-5'>本サービスの終了</li>
          <div className='content'>
            <p>
              運営元は、次の各号いずれかの事由に該当する場合、ユーザーに事前に通知することなく、本サービスの運営を終了することがあります。
            </p>
            <ul>
              <li>
                運営元は、相当の周知期間をもってユーザーに通知の上、利用者に対する本サービス及び本サービスの一部を終了することができるものとします。
              </li>
              <li>前項の通知は、本サイト上での掲示やWebサイト上への掲載によるものとします。</li>
              <li>
                運営元はユーザーに対する通知後、本サービスを終了した場合には、利用者に対して本サービスは終了に伴い生じる損害、損失、その他の費用の賠償または補償を免れるものとします。
              </li>
            </ul>
          </div>

          <li className='title is-5'>合意管轄等</li>
          <div className='content'>
            <ul>
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>
                本サービスに関して紛争が生じた場合には、
                横浜地方裁判所を第一審の専属的合意管轄裁判所とします。
              </li>
            </ul>
          </div>
        </ol>

        <div className='content'>最終更新日： 2023年1月20日</div>
      </section>
    </Motion>
  );
};

export default ToS;
