import { useState } from "react"
import "./FAQ.css"
import Banner from "./Banner/Banner"
const FAQ = () => {

    const queries = {
        "What types of rooms are available in hostels?":"These are dormitories with several beds and bunk beds.",

        "Do hostels provide bedding?":"Yes, in most cases hostels give their visitors bedding. Usually, this consists of a mattress, pillow, and blanket or duvet. Each bed in dormitory-style rooms typically comes with linens.",

        "Is Wi-Fi available in hostels?":"Yes, there is Wi-Fi in hostels.",

        "Are there separate hostels for male and female students?":"For male and female students, separate hostels or dormitory structures are available. This type of setup, which offers different rooms based on gender, is typical in some educational institutions or student housing facilities.",

        "Are meals provided at the hostel?" : "Yes, the hostel offers food. Food will be dependent on hostels and will include breakfast, lunch, snacks, and dinner.",

        "What are the rules and regulations of the hostel?":"Before leaving their dorm rooms, students must turn off all electric appliances (fans, lights, etc.) that are installed in the space. Manhandling, gang fighting, assault or intimidation, malicious property damage, or intoxicated behaviour all constitute serious offences. The highest level of social graces should be displayed by students in their behaviour, decorum, and demeanour. No celebrations or loud noise-making of any kind will be tolerated. At 2200 hours, all recreation centres must be closed. No sort of ragging is permitted, and violators will face harsh penalties. Hostel management will not be held liable for any theft, burglary, or damage to expensive or personal items like jewellery or electrical devices that are kept there at the owner's risk. In the hostel grounds, boarders are not permitted to gamble or use intoxicating substances (such as drugs, alcohol, or tobacco). The hostel personnel will make sporadic rounds and check the rooms of the students.No electrical equipment is allowed, including kettles, irons, induction cooktops, immersion rods, and coolers. To be utilised in rooms without authorization.Without the previous approval of the Hostel Authority, boarders are not permitted to spend the night somewhere other than their hostels.The boarders must not engage in any theft, immoral behaviour, mistreatment of university workers, or the propagation of regionalism, communalism, casteism, etc. The defaulters will face appropriate disciplinary action. Students are not permitted to host meetings or parties on the hostel grounds.without the hostel wardens' prior consent.",

        "What are the facilities and amenities provided at the MIT ADT Hostel?":"Twin Sharing Room, Cupboard, Hot Water, Beds With Mattress, High Speed WIFI, DG Setup, 24x7 Parents Response Live, RO Drinking Water, Housekeeping Staff, Study Table, 24/7 Under CCTV, and Bio-Metric Entrance are among the amenities and facilities offered at the MIT ADT Hostel.",

        "What are the security measures at the hostel?": "Hostels frequently offer a reception area manned around-the-clock where students can inquire about services or voice any complaints. The presence of staff guarantees that security-related issues receive prompt attention. CCTV Surveillance: To monitor activity and improve security, some hostels feature CCTV cameras in common rooms, corridors, and entrances. Secure Entry Points: To prevent unauthorised access to the property, hostels may have secure entry points like lockable gates or doors. In order to notify visitors about fire escapes, emergency phone numbers, and other safety practises, hostels frequently publish safety rules and emergency procedures. Assignment of Rooms and Access Control: Hostels may allocate rooms and restrict access to just those who have registered, preventing unauthorised entry from the outside. The boarders are not allowed to gamble, consume intoxicants (narcotics, alcoholic beverages, smoking etc.) in the hostel premises. Random rounds and checking of student's rooms will be carried out by the hostel staff. No electrical appliances (i.e. kettle, iron, induction cooker, immersion rods, coolers, etc) to be used in rooms without prior permission. The boarders are not allowed to stay overnight out of their hostels without prior permission of the Hostel Authority. The boarders shall not indulge in any act of theft, immoral acts, misbehavior with University staffs, spread of regionalism, communalism and casteism etc. Appropriate disciplinary action will be taken against the defaulters. Students are not allowed to convene any meeting/ party in the hostel premises without the prior permission of Hostel wardens. No student should take law into his/her own hand and indulge in indiscipline, physical fights, abusive language, teasing, insulting gestures etc. Students found indulging in such activities will be liable to be punished/ expelled from the hostel. Students should not paste or make objectionable articles or pictures in the hostel premises. Students should have to show their identity card at every entry/ exit at the Campus main gate."

    }

    const [question,setQuestion] = useState("FAQ");

    return(
        <div className="faq">
            <h1>FAQ</h1>
            {Object.keys(queries).map((ele,idx) => {
                return(
                    <Banner key={`faq-banner-${idx}`} title={ele} answer={queries[`${ele}`]} />
                )
            })}
        </div>
    )
}

export default  FAQ; 