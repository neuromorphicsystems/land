---
{
    "name": "Kielty2023",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Driver Monitoring",
        "Yawn Detection",
        "Seatbelt Detection"
    ],
    "description": "Yawn Detection and Seatbelt State Detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "A non-public dataset was collected alongside the conversion of the YawDD to events using V2E.",
        "dataset_links": []
    },
    "paper": {
        "title": "Neuromorphic Driver Monitoring Systems: A Proof-of-Concept for Yawn Detection and Seatbelt State Detection Using an Event Camera",
        "doi": "10.1109/ACCESS.2023.3312190",
        "authors": [
            "Paul Kielty",
            "Mehdi Sefidgar Dilmaghani",
            "Waseem Shariff",
            "Cian Ryan",
            "Joe Lemley",
            "Peter Corcoran"
        ],
        "abstract": "Driver monitoring systems (DMS) are a key component of vehicular safety and essential for the transition from semi-autonomous to fully autonomous driving. Neuromorphic vision systems, based on event camera technology, provide advanced sensing in motion analysis tasks. In particular, the behaviours of drivers\u2019 eyes have been studied for the detection of drowsiness and distraction. This research explores the potential to extend neuromorphic sensing techniques to analyse the entire facial region, detecting yawning behaviours that give a complimentary indicator of drowsiness. A second proof of concept for the use of event cameras to detect the fastening or unfastening of a seatbelt is also developed. Synthetic training datasets are derived from RGB and Near-Infrared (NIR) video from both private and public datasets using a video-toevent converter and used to train, validate, and test a convolutional neural network (CNN) with a self-attention module and a recurrent head for both yawning and seatbelt tasks. For yawn detection, respective F1-scores of 95.3\\% and 90.4\\% were achieved on synthetic events from our test set and the \u2018\u2018YawDD\u2019\u2019 dataset. For seatbelt fastness detection, 100\\% accuracy was achieved on unseen test sets of both synthetic and real events. These results demonstrate the feasibility to add yawn detection and seatbelt fastness detection components to neuromorphic DMS.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 12,
            "updated": "2025-06-21T17:29:04.911333"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-06-21T17:29:04.098243"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2305.02888"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10239362"
        },
        {
            "type": "project_page",
            "url": "https://ieee-dataport.org/open-access/yawdd-yawning-detection-dataset"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "YawDD",
        "sensor_resolution": "500 x 500",
        "num_classes": "2",
        "stereo": false
    },
    "bibtex": {
        "pages": "96363--96373",
        "year": 2023,
        "author": "Kielty, Paul and Dilmaghani, Mehdi Sefidgar and Shariff, Waseem and Ryan, Cian and Lemley, Joe and Corcoran, Peter",
        "journal": "IEEE Access",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ACCESS.2023.3312190",
        "url": "https://ieeexplore.ieee.org/document/10239362/",
        "shorttitle": "Neuromorphic {Driver} {Monitoring} {Systems}",
        "issn": "2169-3536",
        "copyright": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        "volume": "11",
        "title": "Neuromorphic {Driver} {Monitoring} {Systems}: {A} {Proof}-of-{Concept} for {Yawn} {Detection} and {Seatbelt} {State} {Detection} {Using} an {Event} {Camera}",
        "type": "article",
        "key": "kielty2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1186/s12889-018-6280-1",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11760-022-02244-w",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2557642.2563678",
            "source": "crossref"
        },
        {
            "doi": "10.1093/aje/153.3.219",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11042-023-14555-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00474",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SCEECS57921.2023.10063114",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2022.3160932",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-981-33-4866-0_28",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2680327",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app12178674",
            "source": "crossref"
        },
        {
            "doi": "10.23919/FRUCT48808.2020.9087474",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2015.2507378",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IMTC.2011.5944101",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WoSSPA.2013.6602353",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICEARS56392.2023.10085310",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2019.8814200",
            "source": "crossref"
        },
        {
            "doi": "10.4028/p-43g8x2",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2019.02.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IPAS.2016.7880127",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICSIP49896.2020.9339439",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.2985536",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00295",
            "source": "crossref"
        },
        {
            "doi": "10.1177/09544070211025338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIV.2022.3224690",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3244008",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2009.5403120",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAC.2019.2921659",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.3046999",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3070694",
            "source": "crossref"
        },
        {
            "doi": "10.1109/OJITS.2021.3132725",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SSCI.2017.8285343",
            "source": "crossref"
        },
        {
            "title": "Self-attention generative adversarial networks",
            "source": "crossref"
        },
        {
            "title": "Vision-based driver&#x2019;s seat belt detection",
            "source": "crossref"
        },
        {
            "title": "Control and evaluation of event cameras output sharpness via bias",
            "source": "crossref"
        },
        {
            "title": "Driver&#x2019;s seat belt detection using CNN",
            "source": "crossref"
        },
        {
            "title": "Deep learning based automatic vertical height adjustment of incorrectly fastened seat belts for driver and passenger safety in fleet vehicles",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- The dataset contains both non-public recordings and data converted from the RGB YawDD dataset[^1].
- Both sets of data were converted using V2E with an output resolution of 500 x 500 pixels
- Dataset contains a total of [num_recordings::123] recordings
- Dataset contains 2 different classes (yawn / no yawn)

\[^1\]: Abtahi, S., Omidyeganeh, M., Shirmohammadi, S. and Hariri, B., 2014, March. YawDD: A yawning detection dataset. In Proceedings of the 5th ACM multimedia systems conference (pp. 24-28).
