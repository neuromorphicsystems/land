---
{
    "name": "EyeTrAES",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Eye Tracking",
        "Gaze Tracking"
    ],
    "description": "Eye and Gaze Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Only a subset of the data is currently available via the provided download link in the Github repository.",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/f/s!AhEyqzKWUxqqixmQV56YoVM4-bUi?e=SgEskt",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 2.3,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "EyeTrAES: Fine-grained, Low-Latency Eye Tracking via Adaptive Event Slicing",
        "doi": "10.1145/3699745",
        "authors": [
            "Argha Sen",
            "Nuwan Sriyantha Bandara",
            "Ila Gokarn",
            "Thivya Kandappu",
            "Archan Misra"
        ],
        "abstract": "Eye-tracking technology has gained significant attention in recent years due to its wide range of applications in human-computer interaction, virtual and augmented reality, and wearable health. Traditional RGB camera-based eye-tracking systems often struggle with poor temporal resolution and computational constraints, limiting their effectiveness in capturing rapid eye movements. To address these limitations, we propose EyeTrAES, a novel approach using neuromorphic event cameras for high-fidelity tracking of natural pupillary movement that shows significant kinematic variance. One of EyeTrAES's highlights is the use of a novel adaptive windowing/slicing algorithm that ensures just the right amount of descriptive asynchronous event data accumulation within an event frame, across a wide range of eye movement patterns. EyeTrAES then applies lightweight image processing functions over accumulated event frames from just a single eye to perform pupil segmentation and tracking. We show that these methods boost pupil tracking fidelity by 6+%, achieving IoU~=92%, while incurring at least 3x lower latency than competing pure event-based eye tracking alternatives [38]. We additionally demonstrate that the microscopic pupillary motion captured by EyeTrAES exhibits distinctive variations across individuals and can thus serve as a biometric fingerprint. For robust user authentication, we train a lightweight per-user Random Forest classifier using a novel feature vector of short-term pupillary kinematics, comprising a sliding window of pupil (location, velocity, acceleration) triples. Experimental studies with two different datasets demonstrate that the EyeTrAES-based authentication technique can simultaneously achieve high authentication accuracy (~=0.82) and low processing latency (~=12ms), and significantly outperform multiple state-of-the-art competitive baselines.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-21T13:09:45.887882"
        },
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-21T13:09:46.707337"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.18813"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1145/3699745"
        },
        {
            "type": "github_page",
            "url": "https://github.com/arghasen10/EyeTrAES"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "40 subjects"
    },
    "bibtex": {
        "pages": "1--32",
        "year": 2024,
        "month": "nov",
        "author": "Sen, Argha and Bandara, Nuwan Sriyantha and Gokarn, Ila and Kandappu, Thivya and Misra, Archan",
        "journal": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
        "urldate": "2024-12-15",
        "number": "4",
        "language": "en",
        "doi": "10.1145/3699745",
        "url": "https://dl.acm.org/doi/10.1145/3699745",
        "shorttitle": "{EyeTrAES}",
        "issn": "2474-9567",
        "volume": "8",
        "title": "{EyeTrAES}: {Fine}-grained, {Low}-{Latency} {Eye} {Tracking} via {Adaptive} {Event} {Slicing}",
        "type": "article",
        "key": "sen_eyetraes_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1037/0096-1523.15.3.529",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.image.2022.116804",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.rasd.2023.102228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS58349.2023.10389062",
            "source": "crossref"
        },
        {
            "doi": "10.1523/JNEUROSCI.1636-09.2009",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VLSIDCS47293.2020.9179933",
            "source": "crossref"
        },
        {
            "doi": "10.1167/13.12.5",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3314111.3319819",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3173574.3173856",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VR51125.2022.00059",
            "source": "crossref"
        },
        {
            "doi": "10.1371/journal.pone.0178501",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-23192-1_4",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2857491.2857505",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00138-016-0776-4",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patrec.2015.11.020",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3626705.3627776",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICBK.2018.00016",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-540-25976-3_23",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2638728.2641695",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3313831.3376840",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3287052",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3290605.3300780",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1743666.1743679",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067765",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41598-023-41654-9",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AICAS57966.2023.10168551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3603705",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIFS.2022.3201369",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBIOM.2021.3116875",
            "source": "crossref"
        },
        {
            "doi": "10.1167/19.14.28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00942",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV51458.2022.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3130971",
            "source": "crossref"
        },
        {
            "doi": "10.1142/9789811250477_0023",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3588432.3591511",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3161410",
            "source": "crossref"
        },
        {
            "doi": "10.1504/IJBM.2012.049736",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22072614",
            "source": "crossref"
        },
        {
            "title": "Visualizing data using t-SNE",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains data from 40 subjects
- Purpose of dataset was "Eye Movement Tracking" (in contrast to \[[Ev-Eye]\] )
