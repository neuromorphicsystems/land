---
{
    "name": "FlashyBackdoor",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Adversarial Attacks"
    ],
    "task": "SNN Backdoor attacks for DVS and SNNs",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fi/sc2640xnyg6ojo0bjlyju/Physical_sample_dataset.tar?rlkey=ddr7dnhug67e5dbhmii9nk6df&e=1&st=8x4e2c84&dl=0",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 1.97,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Flashy Backdoor: Real-world Environment Backdoor Attack on SNNs with DVS Cameras",
        "doi": "10.48550/arXiv.2411.03022",
        "authors": [
            "Roberto Ria\u00f1o",
            "Gorka Abad",
            "Stjepan Picek",
            "Aitor Urbieta"
        ],
        "abstract": "While security vulnerabilities in traditional Deep Neural Networks (DNNs) have been extensively studied, the susceptibility of Spiking Neural Networks (SNNs) to adversarial attacks remains mostly underexplored. Until now, the mechanisms to inject backdoors into SNN models have been limited to digital scenarios; thus, we present the first evaluation of backdoor attacks in real-world environments.   We begin by assessing the applicability of existing digital backdoor attacks and identifying their limitations for deployment in physical environments. To address each of the found limitations, we present three novel backdoor attack methods on SNNs, i.e., Framed, Strobing, and Flashy Backdoor. We also assess the effectiveness of traditional backdoor procedures and defenses adapted for SNNs, such as pruning, fine-tuning, and fine-pruning. The results show that while these procedures and defenses can mitigate some attacks, they often fail against stronger methods like Flashy Backdoor or sacrifice too much clean accuracy, rendering the models unusable.   Overall, all our methods can achieve up to a 100% Attack Success Rate while maintaining high clean accuracy in every tested dataset. Additionally, we evaluate the stealthiness of the triggers with commonly used metrics, finding them highly stealthy. Thus, we propose new alternatives more suited for identifying poisoned samples in these scenarios. Our results show that further research is needed to ensure the security of SNN-based systems against backdoor attacks and their safe application in real-world scenarios. The code, experiments, and results are available in our repository.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 0,
            "updated": "2025-01-06 10:30:56.983664"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2411.03022v1"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2411.03022v1"
        },
        {
            "type": "project_page",
            "url": "https://anonymous.4open.science/r/Flashy_backdoor/README.md"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Artificial Intelligence, Computer Science - Cryptography and Security",
        "note": "arXiv:2411.03022 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Ria\u00f1o, Roberto and Abad, Gorka and Picek, Stjepan and Urbieta, Aitor",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2411.03022",
        "url": "http://arxiv.org/abs/2411.03022",
        "shorttitle": "Flashy {Backdoor}",
        "title": "Flashy {Backdoor}: {Real}-world {Environment} {Backdoor} {Attack} on {SNNs} with {DVS} {Cameras}",
        "type": "misc",
        "key": "riano_flashy_2024"
    }
}
---


### Dataset Structure

- Dataset is structured to match the [[DVS-GESTURE]] dataset.