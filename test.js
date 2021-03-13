const test = {
    /**
     * This function helps to fixed coverages [Liability,...]
     */
    CONFIG: {
        "Liability": [
            {
                "check_for_mapping_key": "liab_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "liab_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "liab_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "liab_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "liab_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "liab_csl_value",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "liab_csl_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "liab_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "liab_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "liab_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "liab_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "liab_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "liab_bi_each_per_value",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "liab_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "liab_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "liab_bi_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "liab_property_dam",
                "default_description": "Property Damage",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "liab_property_dam",
                "default_value": ""
            }
        ],
        "First Party Benefits":[
            {
                "check_for_mapping_key": "fir_prty_ben_med_exp",
                "default_description": "Med Exp",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "fir_prty_ben_med_exp",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "fir_prty_ben_funeral",
                "default_description": "Funeral",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "fir_prty_ben_funeral",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "fir_prty_ben_wk_loss",
                "default_description": "WK Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "fir_prty_ben_wk_loss",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "fir_prty_ben_acc_dth",
                "default_description": "Acc Death",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "fir_prty_ben_acc_dth",
                "default_value": ""
            }
        ],
        "Tort Option": [
            {
                "check_for_mapping_key": "tort_option_ltd",
                "default_description": "LTD",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "tort_option_ltd",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "tort_option_full",
                "default_description": "Full",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "tort_option_full",
                "default_value": ""
            }
        ],
        "Combination First Party Benefits":[
            {
                "check_for_mapping_key": "comb_fir_prty_ben_total_ben_lim",
                "default_description": "Total Benefit Limit",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "comb_fir_prty_ben_total_ben_lim",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "comb_fir_prty_ben_funeral",
                "default_description": "Funeral",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "comb_fir_prty_ben_funeral",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "comb_fir_prty_ben_acc_dth",
                "default_description": "Acc Death",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "comb_fir_prty_ben_acc_dth",
                "default_value": ""
            }
        ],
        "Extraord Medical Benefits": [
            {
                "check_for_mapping_key": "extraord_med_ben_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "extraord_med_ben_value",
                "default_value": ""
            }
        ],
        "Personal Injury Protection":[
            {
                "check_for_mapping_key": "pip_each_per",
                "default_description": "Each Person",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_each_per",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_auto_dth_indemnity",
                "default_description": "Auto Death Indemnity",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_auto_dth_indemnity",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_total_disability",
                "default_description": "Total Disability",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_total_disability",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_ded_value",
                "default_description": "Deductible",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_ded_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_ded_aply_named_ins_only",
                "default_description": "Deductible Applies to Named INS Only",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_ded_aply_named_ins_only",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_ded_aply_named_ins_&_dep_res_rel",
                "default_description": "Deductible Applies to Named INS & Dep Res Rel",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_ded_aply_named_ins_&_dep_res_rel",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_ded_no_ded",
                "default_description": "Deductible",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "pip_ded_no_ded",
                            "is_value": "TRUE",
                            "set_default_value": "No Deductible"
                        },
                        {
                            "mapping_key": "pip_ded_500",
                            "is_value": "TRUE",
                            "set_default_value": "$500"
                        },
                        {
                            "mapping_key": "pip_ded_250",
                            "is_value": "TRUE",
                            "set_default_value": "$250"
                        },{
                            "mapping_key": "pip_ded_1000",
                            "is_value": "TRUE",
                            "set_default_value": "$1000"
                        }
                    ]
                },
                "value_mapping_key": null,
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_wk_loss_excl_named_ins_only",
                "default_description": "WK Loss Excl - Named INS Only",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_wk_loss_excl_named_ins_only",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "pip_wk_loss_excl_named_ins_&_dep_res_rel",
                "default_description": "WK Loss Excl - Named INS & Dep Res Rel",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "pip_wk_loss_excl_named_ins_&_dep_res_rel",
                "default_value": ""
            }
        ],
        "OBEL": [
            {
                "check_for_mapping_key": "obel_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "obel_value",
                "default_value": ""
            }
        ],
        "Extended PIP":[
            {
                "check_for_mapping_key": "ext_pip_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "ext_pip_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "ext_pip_inc_wk_loss",
                "default_description": "Include WK Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "ext_pip_inc_wk_loss",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "ext_pip_exc_wk_loss",
                "default_description": "Exclude WK Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "ext_pip_exc_wk_loss",
                "default_value": ""
            }
        ],
        "Additional PIP":[
            {
                "check_for_mapping_key": "add_pip_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_option",
                "default_description": "Option",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_option",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_inc_wk_loss",
                "default_description": "Include WK Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_inc_wk_loss",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_exc_wk_loss",
                "default_description": "Exclude WK Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_exc_wk_loss",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_wk_loss",
                "default_description": "Work Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_wk_loss",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_other_exp",
                "default_description": "Other Exp",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_other_exp",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "add_pip_dth_ben",
                "default_description": "Death Benefit",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "add_pip_dth_ben",
                "default_value": ""
            }
        ],
        "Work Loss Coord":[
            {
                "check_for_mapping_key": "wk_loss_coord_yes",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "wk_loss_coord_yes",
                "default_value": ""
            }
        ],
        "Medical Exp Elim":[
            {
                "check_for_mapping_key": "med_exp_elim_named_ins_only",
                "default_description": "Named INS Only",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "med_exp_elim_named_ins_only",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "med_exp_elim_named_ins_&_rel",
                "default_description": "Named Insured & Relatives",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "med_exp_elim_named_ins_&_rel",
                "default_value": ""
            }
        ],
        "Medical Payments": [
            {
                "check_for_mapping_key": "med_pay_each_person",
                "default_description": "Each person",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "med_pay_each_person",
                "default_value": ""
            }
        ],
        "Uninsured Motorist": [
            {
                "check_for_mapping_key": "unin_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "unin_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "unin_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "unin_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "unin_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "unin_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "unin_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "unin_bi_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_property_dam",
                "default_description": "Property Damage",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "unin_property_dam",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "unin_motor_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_motor_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "unin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "unin_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "unin_motor_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_motor_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "unin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "unin_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "unin_motor_bi_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_property_dam",
                "default_description": "Property Damage",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "unin_motor_property_dam",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_value",
                "default_description": "",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "unin_motor_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_stkd",
                "default_description": "Stacked",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_motor_stkd",
                            "is_value": "TRUE",
                        },
                        {
                            "mapping_key": "unin_motor_stkd",
                            "is_value": "TRUE",
                        },
                        {
                            "mapping_key": "unin_motor_non_stkd",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "unin_motor_stkd",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "unin_motor_non_stkd",
                "default_description": "Non Stacked",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "unin_motor_stkd",
                            "is_value": "TRUE",
                        },
                        {
                            "mapping_key": "unin_motor_non_stkd",
                            "is_value": "TRUE",
                            "set_default_value": "True",
                            "set_default_value_mapping_key":null
                        },
                        {
                            "mapping_key": "unin_motor_stkd",
                            "is_value": "FALSE",
                            "set_default_value": "True",
                            "set_default_value_mapping_key":null
                        }
                    ]
                },
                "value_mapping_key": "unin_motor_non_stkd",
                "default_value": ""
            }
        ],
        "Statutory Uninsured Motorist":[
            {
                "check_for_mapping_key": "stat_unin_motor_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "stat_unin_motor_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "stat_unin_motor_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "stat_unin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "stat_unin_motor_csl_bi_ea_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "stat_unin_motor_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "stat_unin_motor_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "stat_unin_motor_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "stat_unin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "stat_unin_motor_csl_bi_ea_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "stat_unin_motor_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "stat_unin_motor_bi_each_acc",
                "default_value": ""
            }
        ],
        "Underinsured Motorist": [
            {
                "check_for_mapping_key": "undrin_motor_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "undrin_motor_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "undrin_motor_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "undrin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "undrin_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "undrin_motor_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "undrin_motor_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "undrin_motor_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "undrin_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "undrin_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "undrin_motor_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "undrin_motor_bi_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "undrin_motor_stkd",
                "default_description": "Stacked",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "undrin_motor_stkd",
                            "is_value": "TRUE",
                        },
                        {
                            "mapping_key": "undrin_motor_stkd",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "undrin_motor_non_stkd",
                            "is_value": "TRUE",
                        }
                    ]
                },
                "value_mapping_key": "undrin_motor_stkd",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "undrin_motor_non_stkd",
                "default_description": "Non Stacked",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "undrin_motor_stkd",
                            "is_value": "TRUE",
                        },
                        {
                            "mapping_key": "undrin_motor_non_stkd",
                            "is_value": "TRUE",
                            "set_default_value": "True",
                            "set_default_value_mapping_key":null
                        },
                        {
                            "mapping_key": "undrin_motor_stkd",
                            "is_value": "FALSE",
                            "set_default_value": "True",
                            "set_default_value_mapping_key":null
                        }
                    ]
                },
                "value_mapping_key": "undrin_motor_non_stkd",
                "default_value": ""
            }
        ],
        "Uninsured / Underinsured Motorist": [
            {
                "check_for_mapping_key": "um_uim_motor_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "um_uim_motor_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "um_uim_motor_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "um_uim_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "um_uim_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "um_uim_motor_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "um_uim_motor_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "um_uim_motor_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "um_uim_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "um_uim_motor_csl_bi_each_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "um_uim_motor_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "um_uim_motor_bi_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "um_uim_motor_property_dam",
                "default_description": "Property Damage",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "um_uim_motor_property_dam",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "um_uim_motor_pd_each_acc",
                "default_description": "PD Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "um_uim_motor_pd_each_acc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "um_uim_motor_ded",
                "default_description": "Deductible",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "um_uim_motor_ded",
                "default_value": ""
            }
        ],
        "Supplementary Uninsured / Underinsured Motorist":[
            {
                "check_for_mapping_key": "suppl_um_uim_motor_csl",
                "default_description": "CSL",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "suppl_um_uim_motor_bi_each_per",
                    "is_value": "FALSE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "suppl_um_uim_motor_csl",
                            "is_value": "TRUE"
                        },
                        {
                            "mapping_key": "suppl_um_uim_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "suppl_um_uim_motor_csl_bi_ea_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "suppl_um_uim_motor_bi_each_per",
                "default_description": "BI Each Person",
                "description_mapping_key": null,
                "condition": {
                    "mapping_key": "suppl_um_uim_motor_bi_each_per",
                    "is_value": "TRUE"
                },
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "suppl_um_uim_motor_csl",
                            "is_value": "TRUE",
                            "set_default_value_mapping_key": null
                        },
                        {
                            "mapping_key": "suppl_um_uim_motor_bi_each_per",
                            "is_value": "TRUE"
                        }
                    ]
                },
                "value_mapping_key": "suppl_um_uim_motor_csl_bi_ea_per_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "suppl_um_uim_motor_bi_each_acc",
                "default_description": "BI Each Accident",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "suppl_um_uim_motor_bi_each_acc",
                "default_value": ""
            }
        ],
        "Hired / Borrowed Liability": [
            {
                "check_for_mapping_key": "hir_borrowed_liab_cost_of_hire",
                "default_description": "Cost of Hire",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_borrowed_liab_cost_of_hire",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "hir_borrowed_liab_if_any_basis",
                "default_description": "If Any Basis",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_borrowed_liab_if_any_basis",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "hir_borrowed_liab_state",
                "default_description": "States",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_borrowed_liab_state",
                "default_value": ""
            }
        ],
        "Non-Owned Liability": [
            {
                "check_for_mapping_key": "number_of_employess_value",
                "default_description": "Numbers of Employees",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "number_of_employess_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "number_of_volunteers_value",
                "default_description": "Numbers of Volunteers",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "number_of_volunteers_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "number_of_partners_value",
                "default_description": "Numbers of Partners",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "number_of_partners_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "non_owned_liab_state",
                "default_description": "States",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "non_owned_liab_state",
                "default_value": ""
            }
        ],
        "Physical Damage": [
            {
                "check_for_mapping_key": "towing_&_labor",
                "default_description": "Towing & Labor",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "towing_&_labor",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "comp_otc",
                "default_description": "COMP/OTC",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "comp_otc",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "spec_c_of_l",
                "default_description": "Specified Causes of Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "spec_c_of_l",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "coll",
                "default_description": "Collision",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "coll",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "phy_dam_waiver_of_deductible",
                "default_description": "Waiver Of Deductible",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "phy_dam_waiver_of_deductible",
                "default_value": ""
            }
        ],
        "Hired Physical Damage": [
            {
                "check_for_mapping_key": "hir_phy_dam_state",
                "default_description": "States",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_phy_dam_state",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "hir_phy_dam_days",
                "default_description": "Days",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_phy_dam_days",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "hir_phy_dam_vehicle",
                "default_description": "Vehicles",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "hir_phy_dam_vehicle",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "coverage_deductibles_comp_value",
                "default_description": "COMP",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "coverage_deductibles_comp_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "coverage_deductibles_spec_c_of_l_value",
                "default_description": "Specified Causes of Loss",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "coverage_deductibles_spec_c_of_l_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "coverage_deductibles_coll_value",
                "default_description": "Collision",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": null,
                "value_mapping_key": "coverage_deductibles_coll_value",
                "default_value": ""
            },
            {
                "check_for_mapping_key": "hir_phy_dam_coverage_is_primary",
                "default_description": "Coverage",
                "description_mapping_key": null,
                "condition": null,
                "warning_condition": {
                    "exception_type": "REVIEW_REQUIRED",
                    "conditions": [
                        {
                            "mapping_key": "hir_phy_dam_coverage_is_primary",
                            "is_value": "TRUE",
                            "set_default_value":"Primary"
                        },
                        {
                            "mapping_key": "hir_phy_dam_coverage_is_secondary",
                            "is_value": "TRUE",
                            "set_default_value":"Secondary"
                        }
                    ]
                },
                "value_mapping_key": null,
                "default_value": ""
            },
        ]
    },
    /**
     * This function helps to custom coverages
     */
    CUSTOM_CONFIG: [
        {
            "check_for_mapping_key": "user_defined_coverage_DDDD",
            "default_coverage": "",
            "coverage_mapping_key": "user_defined_coverage_DDDD",
            "condition": null,
            "warning_condition": null,
            "value_mapping_key": "user_defined_coverage_DDDD_limits",
            "default_value": "",
            "start": 1,
            "length": 5
        },
        {
            "check_for_mapping_key": "phy_dam_user_defined_coverage_DDDD",
            "default_coverage": "",
            "coverage_mapping_key": "phy_dam_user_defined_coverage_DDDD",
            "condition": null,
            "warning_condition": null,
            "value_mapping_key": "phy_dam_user_defined_coverage_DDDD_limits",
            "default_value": "",
            "start": 1,
            "length": 2
        }
    ],
    /**
     * This function helps to find state name from meta PDF template_version
     * @param {*} metas
     */
    getStateFromMeta: function (metas) {
        logger.info(`Inside getStateFromMeta`);
        try {
            for (const key in metas) {
                const meta_details = metas[key]
                if (meta_details.template_name === ACORD_137 && meta_details.template_version.length > 0) {
                    return meta_details.template_version.substring(meta_details.template_version.lastIndexOf("_") + 1)
                }
            }
        } catch (error) {
            logger.error(`Error: getStateFromMeta ${error.message}`);
            return ""
        }
    },
    /**
     * This function helps to Transformation Data to rule engine for Auto Limits
     * @param {*} filter1Result
     */
    getTransformationData: function (filter1Result) {
        logger.info(`Inside getTransformationData`);
        let outputRows = [];
        if (filter1Result.length === 0) {
            return outputRows;
        }
        let cloneUsecase = JSON.parse(JSON.stringify(filter1Result));
        for (const limitData of cloneUsecase) {
            const state = test.getStateFromMeta(limitData.meta);
            const coverageRows = test.appendAllLimitsRows(state, limitData)
            outputRows = [...outputRows, ...coverageRows]
        }
        return outputRows;
    },
    /**
     * This function helps to loop and coverage configs
     * @param {*} state
     * @param {*} limitData
     */
    appendAllLimitsRows: function (state, limitData) {
        logger.info(`Inside appendAllLimitsRows`);
        const config = test.CONFIG
        const customConfig = test.CUSTOM_CONFIG
        let outputRows = [];
        for (const coverage in config) {
            const coverageRows = test.getEachCoverageRows(state, limitData, coverage, config[coverage], outputRows.length)
            /** Checking for all coverage rows values empty or not */
            var emptyCoverageRows = _.filter(coverageRows, function(row){
                return utility.isValueEmpty(row.data.value, ['', '$']) && row.data.exceptions.indexOf(MANDATORY) === -1
            })
            if(emptyCoverageRows.length !== coverageRows.length){
                outputRows = [...outputRows, ...coverageRows] //outputRows.concat(coverageRows)
            }
        }
        /* For Custom coverages after all fixed one completed above */
        for( const rowConfig of customConfig){
            const coverageRows = test.getEachCustomCoverageRows(state, limitData, rowConfig, outputRows.length)
            outputRows = [...outputRows, ...coverageRows]
        }
        return outputRows
    },
    /**
     * This function helps to find custom coverage rows and values
     * @param {*} state
     * @param {*} limitData
     * @param {*} rowConfig
     * @param {*} rowsCount
     */
    getEachCustomCoverageRows: function (state, limitData, rowConfig, rowsCount) {
        let coverageRows = []
        logger.info(`Inside getEachCustomCoverageRows`)
        rowConfig = JSON.parse(JSON.stringify(rowConfig))
        for(let index = rowConfig.start; index <= rowConfig.length; index++){
            if(!limitData.data.hasOwnProperty(rowConfig.check_for_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index))){
                continue
            }
            let row = {
                submission_usecase_id: limitData.submission_usecase_id,
                row_id: `${limitData.row_id}_${ (rowsCount + coverageRows.length) }`,
                is_row_empty: false,
                data: {
                    state,
                    coverages: "",
                    limit_description: "",
                    value: "",
                    exceptions: []
                },
                meta: {}
            }
            row = test.updateLimitCoverageAndMeta(row, rowConfig, limitData, index)
            row = test.updateLimitValueAndMeta(row, rowConfig, limitData, index)
            coverageRows = test.isCustomCoveragePresentAndAppend(coverageRows, row)
        }
        return coverageRows
    },
    /**
     * This function helps to find coverage rows and values
     * @param {*} state
     * @param {*} limitData
     * @param {*} coverage
     * @param {*} coverageConfig
     * @param {*} rowsCount
     */
    getEachCoverageRows: function (state, limitData, coverage, coverageConfig, rowsCount) {
        let coverageRows = []
        logger.info(`Inside getEachCoverageRows`)
        coverageConfig = JSON.parse(JSON.stringify(coverageConfig))
        for (const rowConfig of coverageConfig) {
            if(!limitData.data.hasOwnProperty(rowConfig.check_for_mapping_key)){
                continue
            }
            let row = {
                submission_usecase_id: limitData.submission_usecase_id,
                row_id: `${limitData.row_id}_${ (rowsCount + coverageRows.length) }`,
                is_row_empty: false,
                data: {
                    state,
                    coverages: autoLabelsConfig.getStateLabel(coverage, state),
                    limit_description: "",
                    value: "",
                    exceptions: []
                },
                meta: {}
            }
            row = test.updateLimitDescriptionAndMeta(row, rowConfig, limitData, state)
            row = test.updateLimitValueAndMeta(row, rowConfig, limitData)
            coverageRows.push(row)
        }
        return coverageRows
    },
    /**
     * Helps to update limit description
     * @param {*} row
     * @param {*} rowConfig
     * @param {*} limitData
     * @param {*} index
     */
    updateLimitDescriptionAndMeta: function (row, rowConfig, limitData, index, state) {
        logger.info(`Inside updateLimitDescriptionAndMeta`);
        row.data.limit_description = autoLabelsConfig.getStateLabel(rowConfig.default_description, state)
        let metaKeys = []
        if (rowConfig.description_mapping_key) {
            row.data.limit_description = limitData.data[rowConfig.description_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index)]
            metaKeys.push(rowConfig.description_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index))
        }
        row = test.appendMetaKeys(metaKeys, limitData, 'limit_description', row)
        return row
    },
    /**
     * Helps to update limit value
     * @param {*} row
     * @param {*} rowConfig
     * @param {*} limitData
     * @param {*} index
     */
    updateLimitValueAndMeta: function (row, currentRowConfig, limitData, index) {
        logger.info(`Inside updateLimitValueAndMeta`);
        let { metaKeys, rowConfig, exceptions } = test.validateWarningChecks(currentRowConfig, limitData)
        row.data.value = rowConfig.default_value
        row.data.exceptions = exceptions
        metaKeys.push(rowConfig.check_for_mapping_key)
        /** When condition config check failed, make lookup property empty. So default value will be applied */
        if (rowConfig.condition
            && (!limitData.data[rowConfig.condition.mapping_key]
            || limitData.data[rowConfig.condition.mapping_key].toUpperCase() !== rowConfig.condition.is_value))
        {
            metaKeys.push(rowConfig.condition.mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index))
            rowConfig.value_mapping_key = null
        }
        /** Assign value from lookup property */
        if (rowConfig.value_mapping_key) {
            row.data.value = limitData.data[rowConfig.value_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index)]
            metaKeys.push(rowConfig.value_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index))
        }
        /** When value is Mandatory, check is empty or not */
        if (rowConfig.condition
            && test.additionalCheckingToAddMandatory(row, limitData, rowConfig))
        {
            row.data.exceptions.push(MANDATORY)
        }
        row = test.appendMetaKeys(metaKeys, limitData, 'value', row)
        return row
    },
    /**
     * This function helps, check is check_for_mapping_key value is not False.
     * If false, return false or else check is value empty is true or false
     * @param {*} row
     * @param {*} limitData
     * @param {*} rowConfig
     */
    additionalCheckingToAddMandatory: function (row, limitData, rowConfig) {
        if(limitData.data[rowConfig.check_for_mapping_key].toUpperCase() === "FALSE"){
            return false
        }
        if(limitData.data[rowConfig.condition.mapping_key] === undefined
            || (limitData.data[rowConfig.condition.mapping_key].toUpperCase() === rowConfig.condition.is_value
            && utility.isValueEmpty(row.data.value, ['', '$']))
        ){
            return true
        }
        return false
    },
    /**
     * Helps to update coverages value
     * @param {*} row
     * @param {*} rowConfig
     * @param {*} limitData
     * @param {*} index
     */
    updateLimitCoverageAndMeta: function (row, rowConfig, limitData, index) {
        logger.info(`Inside updateLimitCoverageAndMeta`);
        row.data.coverages = rowConfig.default_coverage
        let metaKeys = []
        const key = rowConfig.coverage_mapping_key.replace(CUSTOM_LIABILITY_INDEX_REPLACER, index)
        if (limitData.data.hasOwnProperty(key)) {
            row.data.coverages = limitData.data[key]
            metaKeys.push(key)
        }
        row = test.appendMetaKeys(metaKeys, limitData, 'coverages', row)
        return row
    },
    /**
     * This function helps to append meta for description and value
     * @param {*} keys
     * @param {*} limitData
     * @param {*} valueMetaKey
     * @param {*} row
     */
    appendMetaKeys: function (keys, limitData, valueMetaKey, row) {
        logger.info(`Inside appendMetaKeys`);
        keys = _.uniq(keys)
        let metas = []
        for (const key in keys) {
            let currentMeta = {}
            const currentMetaKey = keys[key]
            currentMeta[currentMetaKey] = limitData.meta[currentMetaKey]
            metas.push(currentMeta)
        }
        if (metas.length > 0) {
            row.meta[valueMetaKey] = metas
        }
        return row
    },
    /**
     * This function helps check value and coverages value Present, if so append
     * @param {*} coverageRows
     * @param {*} row
     */
    isCustomCoveragePresentAndAppend: function (coverageRows, row){
        logger.info(`Inside isCustomCoveragePresentAndAppend`);
        if(row.data.value !== "" || row.data.coverages !== ""){
            coverageRows.push(row)
        }
        return coverageRows
    },
    /**
     * This funtion helps validate Warning checks and updated default value & metas
     * @param {*} rowConfig
     * @param {*} limitData
     */
    validateWarningChecks: function(rowConfig, limitData){
        logger.info(`Inside validateWarningChecks`);
        let metaKeys = []
        let exceptions = []
        if(!rowConfig.warning_condition){
            return  {
                metaKeys,
                rowConfig,
                exceptions
            }
        }
        const exception_type = rowConfig.warning_condition.exception_type
        let isMoreThanOneSelected = 0
        for(const condition of rowConfig.warning_condition.conditions){
            metaKeys.push(condition.mapping_key)
            if (limitData.data[condition.mapping_key] && limitData.data[condition.mapping_key].toUpperCase() === condition.is_value) {
                rowConfig = test.updateDefaultValue(rowConfig, condition.set_default_value, condition)
                isMoreThanOneSelected++
            }
        }

        if (isMoreThanOneSelected > 1){
            rowConfig.condition = null
            exceptions.push(exception_type)
        }

        return  {
            metaKeys,
            rowConfig,
            exceptions
        }
    },
    /**
     * This function check and update default value or default value map, if not present
     * @param {*} rowConfig
     * @param {*} setDefaultValue
     */
    updateDefaultValue: function(rowConfig, setDefaultValue, condition){
        logger.info(`Inside updateDefaultValue`);
        if(rowConfig.default_value === "" && setDefaultValue){
            rowConfig.default_value = setDefaultValue
        }

        if(condition.hasOwnProperty("set_default_value_mapping_key")){
            rowConfig.value_mapping_key = condition.set_default_value_mapping_key
        }

        return rowConfig
    },

}

module.exports = test;
